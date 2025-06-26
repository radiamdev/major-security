import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AboutUS from '@/components/sections/AboutUs'
import ContactUs from '@/components/sections/ContactUs'
import HeroOld from '@/components/sections/HeroOld'
// import LastNews from '@/components/section/LastNews'
import ServicePage from '@/components/sections/Service'
import WhyPage from '@/components/sections/Why'
import Hero from '@/components/sections/Hero'

export default function Home() {
    return (
        <main className='scroll-smooth'>
            <Header />
            <Hero />
            <HeroOld />
            {/* <LastNews /> */}
            <AboutUS />
            <ServicePage/>
            <WhyPage/>
            <ContactUs />
            <Footer />
        </main>
    )
}
