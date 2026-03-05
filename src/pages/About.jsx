import { aboutPageHeader } from '../assets/dummy-data'
import { AboutSkillsSection } from '../sections/about'
import { HeroSection } from '../sections/shared/HeroSection'

const aboutHeader = aboutPageHeader[0]

export default function About() {
    return (
        <>
            <HeroSection
                badge={aboutHeader.badge}
                heading={aboutHeader.heading}
                breadcrumbItems={[{ label: 'About' }]}
            />

            <AboutSkillsSection />
        </>
    )
}
