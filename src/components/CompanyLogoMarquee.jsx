export default function CompanyLogoMarquee() {
    const toolIcons = ['python', 'javascript', 'react', 'django', 'typescript', 'git', 'docker', 'figma']

    return (
        <>
            <style>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>

            <div className="relative mx-auto w-full max-w-75 select-none overflow-hidden px-1 sm:max-w-5xl sm:px-0">
                <div className="marquee-inner inline-flex w-max whitespace-nowrap will-change-transform" style={{ animationDuration: '15s' }}>
                    {[...toolIcons, ...toolIcons].map((tool, index) => (
                        <img
                            key={index}
                            src={`https://cdn.simpleicons.org/${tool}/ffffff`}
                            alt={tool}
                            className="mx-3 h-4 w-4 object-contain sm:mx-6 sm:h-5 sm:w-5"
                            draggable={false}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
