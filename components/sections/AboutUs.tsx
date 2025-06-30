'use client'
import { useRef } from 'react'
import Container from '../common/Container'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import Button from '../common/Button'
import useTranslate from '@/lib/hooks/useTranslate'
import lang from '@/data/language/about.json'
import AboutUsBottomSection from './AboutUsBottomSection'
import 'swiper/css'
import 'swiper/css/autoplay'
import MediaSlider from '../common/MediaSlider'

gsap.registerPlugin(ScrollTrigger)

export default function AboutUS() {
    const aboutSection = useRef(null)

    useGSAP(() => {
        // Animation du bloc principal "about"
        gsap.fromTo(
            '.about-us-one',
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.about-us-one',
                    start: 'top 80%',
                },
            }
        )

        // Animation du bloc avec le pourcentage
        gsap.fromTo(
            '.about-two',
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.about-two',
                    start: 'top 80%',
                },
            }
        )
    }, [])

    // Translation
    const t = useTranslate(lang)

    return (
        <div className="w-screen">
            <Container tag="section" id="about" className="py-16">
                <section className="about-us px-6 lg:px-12" ref={aboutSection}>
                    <div className="about-us-one flex flex-col lg:flex-row-reverse items-center justify-between">
                        <div className="about-us-left w-full lg:w-[50%] flex items-center justify-center ">
                            <MediaSlider />
                        </div>
                        <div className="about-us-two w-full lg:w-[50%] text-center lg:text-left">
                            <div className="!text-4xl lg:w-82 !font-bold my-2 leading-relaxed">
                                {t('title')}
                            </div>
                            <div className="text-[#7B7B7B] lg:w-[500px] text-base lg:text-lg my-6 leading-relaxed">
                                {t('description1')}
                            </div>
                            <Link href={'/contact-us'}>
                                {' '}
                                <Button label={t('contactUs')} />
                            </Link>
                        </div>
                    </div>

                    {/* Bottom part section for about us */}
                    <AboutUsBottomSection />
                </section>
            </Container>
        </div>
    )
}
