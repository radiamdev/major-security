import Footer from '@/components/Footer'
import Header from '@/components/Header'
import AboutUS from '@/components/section/AboutUs'
import ContactUs from '@/components/section/ContactUs'
import Hero from '@/components/section/Hero'

export default function Home() {
    return (
        <main>
            <Header />
            <Hero />
            <AboutUS />
            <ContactUs />
            <Footer />
        </main>
    )
}
