import { Link } from 'react-router-dom'

export function SharedHeroSection({ badge, heading, breadcrumbItems = [] }) {
    const items = breadcrumbItems.length > 0 ? breadcrumbItems : [{ label: badge }]

    return (
        <section className="relative isolate overflow-hidden ">


            <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24 ">
                <div className="mt-10 flex flex-wrap items-center space-x-1 text-sm font-medium text-slate-400">
                    <Link to="/" aria-label="Home" className="inline-flex">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 7.609c.352 0 .69.122.96.343l.111.1 6.25 6.25v.001a1.5 1.5 0 0 1 .445 1.071v7.5a.89.89 0 0 1-.891.891H9.125a.89.89 0 0 1-.89-.89v-7.5l.006-.149a1.5 1.5 0 0 1 .337-.813l.1-.11 6.25-6.25c.285-.285.67-.444 1.072-.444Zm5.984 7.876L16 9.5l-5.984 5.985v6.499h11.968z" fill="#475569" stroke="#475569" strokeWidth=".094" />
                        </svg>
                    </Link>

                    {items.map((item, index) => {
                        const isLast = index === items.length - 1
                        return (
                            <div key={`${item.label}-${index}`} className="inline-flex items-center space-x-1">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.784 15.68 11.46 4.13h1.75L8.534 15.68z" fill="#CBD5E1" />
                                </svg>

                                {item.to && !isLast ? (
                                    <Link to={item.to} className="text-slate-400 hover:text-slate-200">
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span className={isLast ? 'text-blue-500' : 'text-slate-400'}>{item.label}</span>
                                )}
                            </div>
                        )
                    })}
                </div>
                <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-tight text-slate-100 sm:text-5xl">
                    {heading}
                </h1>


            </div>
        </section>
    )
}
