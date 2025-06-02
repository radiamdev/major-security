import Footer from '@/components/Footer'
import Header from '@/components/Header'
import AboutUS from '@/components/section/AboutUs'
import ContactUs from '@/components/section/ContactUs'
import Hero from '@/components/section/Hero'
import LastNews from '@/components/section/LastNews'
import ServicePage from '@/components/section/Service'
import WhyPage from '@/components/section/Why'

export default function Home() {
    return (
        <main className='scroll-smooth'>
            <Header />
            <Hero />
            <LastNews />
            <AboutUS />
            <ServicePage/>
            <WhyPage/>
            <ContactUs />
            <Footer />
        </main>
    )
}
