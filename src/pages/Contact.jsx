import { contactPageContent } from '../assets/dummy-data'
import { ContactMainSection } from '../sections/ContactMainSection'
import { SharedHeroSection } from '../sections/SharedHeroSection'

const contactHeader = contactPageContent[0]

export default function Contact() {
    return (
        <>
            <SharedHeroSection
                badge={contactHeader.badge}
                heading={contactHeader.heading}
                breadcrumbItems={[{ label: 'Contact' }]}
            />
            <ContactMainSection />
        </>
    )
}
