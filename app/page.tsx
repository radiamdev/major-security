import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AboutUS from '@/components/sections/AboutUs'
import ContactUs from '@/components/sections/ContactUs'
// import LastNews from '@/components/section/LastNews'
import ServicePage from '@/components/sections/Service'
import WhyPage from '@/components/sections/Why'
import HeroForDesktopScreen from '@/components/sections/hero/HeroForDesktopScreen'
import HeroForMobileScreen from '@/components/sections/hero/HeroForMobileScreen'
import ScrollingBanner from '@/components/sections/ScrollingBanner'

export default function Home() {
    return (
        <main className="scroll-smooth">
            <Header />
            {/* See the docs #1 */}
            <div className="w-full h-40 lg:h-0" />

            {/* See the docs #2 */}
            <div className="hidden lg:block">
                <HeroForDesktopScreen />
            </div>
            <div className="block lg:hidden">
                <HeroForMobileScreen />
            </div>

            <ScrollingBanner />
            {/* <LastNews /> */}
            <AboutUS />
            <ServicePage />
            <WhyPage />
            <ContactUs />
            <Footer />
        </main>
    )
}

// Docs #1: I make it here to have a top margin or space between header and section because the header is sticky so the section must have a top margin

// Docs #2: Hero based on screen size. (The reason is the management complexity of the design)
