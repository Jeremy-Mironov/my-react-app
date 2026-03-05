import CardSwap, { Card } from '../components/CardSwap'


export function PortfolioCardSwapSection() {
    return (
        <section className="border-b border-slate-800 ">
            <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
                <div className="lg:pr-6">
                    <h3 className="text-2xl font-bold text-slate-100 sm:text-3xl">Websites, Branding, and Digital Solutions Built for Growth</h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                        Explore my portfolio of business websites, marketing systems, and app concepts designed to create stronger brands and better customer experiences.
                    </p>

                </div>

                <div className="relative h-130">
                    <CardSwap
                        cardDistance={85}
                        verticalDistance={75}
                        delay={8000}
                        pauseOnHover={false}
                        position="center"
                    >
                        <Card className="overflow-hidden border-slate-700 bg-slate-950">
                            <img
                                src="/img/Dwell.png"
                                alt="Dwell project"
                                className="h-full w-full object-cover"
                            />
                        </Card>
                        <Card className="overflow-hidden border-slate-700 bg-slate-950">
                            <img
                                src="/img/Revival.png"
                                alt="Revival Project"
                                className="h-full w-full object-cover"
                            />
                        </Card>
                        <Card className="overflow-hidden border-slate-700 bg-slate-950">
                            <img
                                src="/img/Acremaker.png"
                                alt="Acremaker Project"
                                className="h-full w-full object-cover"
                            />
                        </Card>
                    </CardSwap>
                </div>
            </div>
        </section>
    )
}
