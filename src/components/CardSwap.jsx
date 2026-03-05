import {
    Children,
    cloneElement,
    createRef,
    forwardRef,
    isValidElement,
    useEffect,
    useMemo,
    useRef,
} from 'react'
import gsap from 'gsap'

export const Card = forwardRef(({ customClass, ...rest }, ref) => (
    <div
        ref={ref}
        {...rest}
        className={`absolute top-1/2 left-1/2 rounded-xl border border-white bg-black transform-3d will-change-transform backface-hidden ${customClass ?? ''} ${rest.className ?? ''}`.trim()}
    />
))
Card.displayName = 'Card'

const makeSlot = (index, distanceX, distanceY, total) => ({
    x: index * distanceX,
    y: -index * distanceY,
    z: -index * distanceX * 1.5,
    zIndex: total - index,
})

const placeNow = (element, slot, skewAmount) =>
    gsap.set(element, {
        x: slot.x,
        y: slot.y,
        z: slot.z,
        xPercent: -50,
        yPercent: -50,
        skewY: skewAmount,
        transformOrigin: 'center center',
        zIndex: slot.zIndex,
        force3D: true,
    })

const CardSwap = ({
    width = 500,
    height = 400,
    cardDistance = 60,
    verticalDistance = 70,
    delay = 5000,
    pauseOnHover = false,
    onCardClick,
    skewAmount = 6,
    easing = 'elastic',
    position = 'corner',
    children,
}) => {
    const config = useMemo(
        () =>
            easing === 'elastic'
                ? {
                    ease: 'elastic.out(0.6,0.9)',
                    durDrop: 2,
                    durMove: 2,
                    durReturn: 2,
                    promoteOverlap: 0.9,
                    returnDelay: 0.05,
                }
                : {
                    ease: 'power1.inOut',
                    durDrop: 0.8,
                    durMove: 0.8,
                    durReturn: 0.8,
                    promoteOverlap: 0.45,
                    returnDelay: 0.2,
                },
        [easing]
    )

    const childArray = useMemo(() => Children.toArray(children), [children])
    const refs = useMemo(() => childArray.map(() => createRef()), [childArray.length])

    const order = useRef(Array.from({ length: childArray.length }, (_, index) => index))
    const timelineRef = useRef(null)
    const intervalRef = useRef(null)
    const containerRef = useRef(null)

    useEffect(() => {
        order.current = Array.from({ length: childArray.length }, (_, index) => index)
    }, [childArray.length])

    useEffect(() => {
        const total = refs.length
        refs.forEach((ref, index) => {
            if (ref.current) {
                placeNow(ref.current, makeSlot(index, cardDistance, verticalDistance, total), skewAmount)
            }
        })

        const swap = () => {
            if (order.current.length < 2) return

            const [front, ...rest] = order.current
            const frontElement = refs[front]?.current
            if (!frontElement) return

            const timeline = gsap.timeline()
            timelineRef.current = timeline

            timeline.to(frontElement, {
                y: '+=500',
                duration: config.durDrop,
                ease: config.ease,
            })

            timeline.addLabel('promote', `-=${config.durDrop * config.promoteOverlap}`)
            rest.forEach((itemIndex, index) => {
                const element = refs[itemIndex]?.current
                if (!element) return
                const slot = makeSlot(index, cardDistance, verticalDistance, refs.length)
                timeline.set(element, { zIndex: slot.zIndex }, 'promote')
                timeline.to(
                    element,
                    {
                        x: slot.x,
                        y: slot.y,
                        z: slot.z,
                        duration: config.durMove,
                        ease: config.ease,
                    },
                    `promote+=${index * 0.15}`
                )
            })

            const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length)
            timeline.addLabel('return', `promote+=${config.durMove * config.returnDelay}`)
            timeline.call(
                () => {
                    gsap.set(frontElement, { zIndex: backSlot.zIndex })
                },
                undefined,
                'return'
            )
            timeline.to(
                frontElement,
                {
                    x: backSlot.x,
                    y: backSlot.y,
                    z: backSlot.z,
                    duration: config.durReturn,
                    ease: config.ease,
                },
                'return'
            )

            timeline.call(() => {
                order.current = [...rest, front]
            })
        }

        swap()
        intervalRef.current = window.setInterval(swap, delay)

        if (pauseOnHover && containerRef.current) {
            const node = containerRef.current
            const pause = () => {
                timelineRef.current?.pause()
                if (intervalRef.current) {
                    clearInterval(intervalRef.current)
                }
            }
            const resume = () => {
                timelineRef.current?.play()
                intervalRef.current = window.setInterval(swap, delay)
            }

            node.addEventListener('mouseenter', pause)
            node.addEventListener('mouseleave', resume)

            return () => {
                node.removeEventListener('mouseenter', pause)
                node.removeEventListener('mouseleave', resume)
                if (intervalRef.current) {
                    clearInterval(intervalRef.current)
                }
                timelineRef.current?.kill()
            }
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
            timelineRef.current?.kill()
        }
    }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, config, refs])

    const renderedCards = childArray.map((child, index) =>
        isValidElement(child)
            ? cloneElement(child, {
                key: index,
                ref: refs[index],
                style: {
                    width: typeof width === 'number' ? `min(${width}px, 600px)` : width,
                    height,
                    ...(child.props.style ?? {}),
                },
                onClick: (event) => {
                    child.props.onClick?.(event)
                    onCardClick?.(index)
                },
            })
            : child
    )

    return (
        <div
            ref={containerRef}
            className={`${position === 'center'
                ? 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform overflow-visible perspective-[900px] max-[768px]:scale-[0.8] max-[480px]:scale-[0.6]'
                : 'absolute right-0 bottom-0 origin-bottom-right translate-x-[5%] translate-y-[20%] transform overflow-visible perspective-[900px] max-[768px]:translate-x-[25%] max-[768px]:translate-y-[25%] max-[768px]:scale-[0.75] max-[480px]:translate-x-[25%] max-[480px]:translate-y-[25%] max-[480px]:scale-[0.55]'
                }`}
            style={{
                width,
                height,
            }}
        >
            {renderedCards}
        </div>
    )
}

export default CardSwap
