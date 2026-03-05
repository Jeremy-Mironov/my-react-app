import { portfolioPageHeader } from '../assets/dummy-data'
import { PortfolioCardSwapSection, PortfolioMainSection } from '../sections/portfolio'
import { HeroSection } from '../sections/shared/HeroSection'

const portfolioHeader = portfolioPageHeader[0]

export default function Portfolio() {
    return (
        <>
            <HeroSection badge={portfolioHeader.badge} heading={portfolioHeader.heading} />
            <PortfolioCardSwapSection />
            <PortfolioMainSection />

        </>
    )
}
