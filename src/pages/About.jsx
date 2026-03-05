import { aboutPageHeader } from '../assets/dummy-data'
import { AboutSkillsSection } from '../sections/AboutSkillsSection'
import { SharedHeroSection } from '../sections/SharedHeroSection'

const aboutHeader = aboutPageHeader[0]

export default function About() {
    return (
        <>
            <SharedHeroSection
                badge={aboutHeader.badge}
                heading={aboutHeader.heading}
                breadcrumbItems={[{ label: 'About' }]}
            />

            <AboutSkillsSection />
        </>
    )
}
