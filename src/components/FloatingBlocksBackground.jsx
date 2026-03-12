import './FloatingBlocksBackground.css'

const cubes = [
    {
        id: 1,
        className: 'bg-blue-500/10 border-blue-300/30',
        style: {
            left: '8%',
            top: '11%',
            width: '88px',
            height: '88px',
            animationDuration: '18s',
            animationDelay: '0s',
        },
    },
    {
        id: 2,
        className: 'bg-fuchsia-500/10 border-fuchsia-300/35',
        style: {
            left: '24%',
            top: '62%',
            width: '172px',
            height: '172px',
            animationDuration: '16s',
            animationDelay: '-3s',
        },
    },
    {
        id: 3,
        className: 'bg-cyan-400/10 border-cyan-300/30',
        style: {
            left: '46%',
            top: '24%',
            width: '96px',
            height: '96px',
            animationDuration: '22s',
            animationDelay: '-8s',
        },
    },
    {
        id: 4,
        className: 'bg-indigo-500/10 border-indigo-300/30',
        style: {
            left: '62%',
            top: '68%',
            width: '64px',
            height: '64px',
            animationDuration: '14s',
            animationDelay: '-4s',
        },
    },
    {
        id: 5,
        className: 'bg-sky-400/10 border-sky-300/30',
        style: {
            left: '78%',
            top: '20%',
            width: '80px',
            height: '80px',
            animationDuration: '20s',
            animationDelay: '-6s',
        },
    },
]

export default function FloatingBlocksBackground() {
    return (
        <div className="floating-blocks-layer" aria-hidden="true">
            <div className="floating-blocks-vignette" />
            {cubes.map((cube) => (
                <div key={cube.id} className="floating-block" style={cube.style}>
                    <div className="floating-cube">
                        <div className={`floating-cube-face floating-cube-front ${cube.className}`} />
                        <div className={`floating-cube-face floating-cube-back ${cube.className}`} />
                        <div className={`floating-cube-face floating-cube-left ${cube.className}`} />
                        <div className={`floating-cube-face floating-cube-right ${cube.className}`} />
                        <div className={`floating-cube-face floating-cube-top ${cube.className}`} />
                        <div className={`floating-cube-face floating-cube-bottom ${cube.className}`} />
                    </div>
                </div>
            ))}
        </div>
    )
}
