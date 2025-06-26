import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ContactUs from '@/components/sections/ContactUs'

const ContactUsPage = () => {
    return (
        <main>
            <Header />
            {/* See the docs #1 */}
            <div className="w-full h-40 lg:h-0" />

            <ContactUs />
            <Footer />
        </main>
    )
}

export default ContactUsPage

// Docs #1: I make it here to have a top margin or space between header and section because the header is sticky so the section must have a top margin
