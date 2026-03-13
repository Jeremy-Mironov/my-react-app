import { aboutPageHeader } from '../assets/dummy-data'
import { AboutPreviewSection } from '../sections/AboutPreviewSection'
import { AboutSkillsSection } from '../sections/AboutSkillsSection'
import { CtaSection } from '../sections/CtaSection'
import { SharedHeroSection } from '../sections/SharedHeroSection'

const aboutHeader = aboutPageHeader[0]

export default function About() {
    return (
        <>

            <SharedHeroSection
                badge={aboutHeader.badge}
                heading={aboutHeader.heading}
                breadcrumbItems={[{ label: 'About' }]}
            /><AboutPreviewSection />
            <CtaSection />

            <AboutSkillsSection />
        </>
    )
}
