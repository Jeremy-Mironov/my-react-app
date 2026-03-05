import { portfolioPageHeader } from '../assets/dummy-data'
import { PortfolioCardSwapSection } from '../sections/PortfolioCardSwapSection'
import { PortfolioMainSection } from '../sections/PortfolioMainSection'
import { SharedHeroSection } from '../sections/SharedHeroSection'

const portfolioHeader = portfolioPageHeader[0]

export default function Portfolio() {
    return (
        <>
            <SharedHeroSection
                badge={portfolioHeader.badge}
                heading={portfolioHeader.heading}
                breadcrumbItems={[{ label: 'Portfolio' }]}
            />
            <PortfolioCardSwapSection />
            <PortfolioMainSection />

        </>
    )
}
