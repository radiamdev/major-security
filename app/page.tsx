
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ContactUs from '@/components/section/ContactUs'
import Hero from '@/components/section/Hero'
import ServicePage from '@/components/Service/page'
import WhyPage from '@/components/why/page'

export default function Home() {
    return (
        <main>
            <Header />
            <Hero />
            <ServicePage />
            <WhyPage/>
            <ContactUs />
            <Footer />
        </main>
    )
}
