import { contactPageContent } from '../assets/dummy-data'
import { ContactMainSection } from '../sections/contact'
import { HeroSection } from '../sections/shared/HeroSection'

const contactHeader = contactPageContent[0]

export default function Contact() {
    return (
        <>
            <HeroSection badge={contactHeader.badge} heading={contactHeader.heading} />
            <ContactMainSection />
        </>
    )
}
