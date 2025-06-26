import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AboutUS from '@/components/sections/AboutUs'
import ContactUs from '@/components/sections/ContactUs'
import Hero from '@/components/sections/Hero'
// import LastNews from '@/components/section/LastNews'
import ServicePage from '@/components/sections/Service'
import WhyPage from '@/components/sections/Why'

export default function Home() {
    return (
        <main className='scroll-smooth'>
            <Header />
            <Hero />
            {/* <LastNews /> */}
            <AboutUS />
            <ServicePage/>
            <WhyPage/>
            <ContactUs />
            <Footer />
        </main>
    )
}
