export default function CompanyLogoMarquee() {
    const toolIcons = ['python', 'javascript', 'react', 'django', 'typescript', 'git', 'docker', 'C#', 'Figma']

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

            <div className="relative mx-auto w-full max-w-5xl select-none overflow-hidden">
                <div className="marquee-inner flex min-w-[200%] will-change-transform" style={{ animationDuration: '15s' }}>
                    <div className="flex">
                        {[...toolIcons, ...toolIcons].map((tool, index) => (
                            <img
                                key={index}
                                src={`https://cdn.simpleicons.org/${tool}/ffffff`}
                                alt={tool}
                                className="mx-6 h-5 w-5 object-contain"
                                draggable={false}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
