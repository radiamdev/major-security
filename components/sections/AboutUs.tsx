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

gsap.registerPlugin(ScrollTrigger)

export default function AboutUS() {
    const aboutSection = useRef(null)
    const statsSection = useRef(null)

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
                        <div className="about-us-left w-full lg:w-[50%] flex justify-center">
                            <img
                                src={'/images/majorsec.webp'}
                                alt="major security logo"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="about-us-two w-full lg:w-[50%] text-center lg:text-left">
                            <div className="!text-4xl lg:w-82 !font-bold my-2 leading-relaxed">
                                {t('title')}
                            </div>
                            <div className="text-[#7B7B7B] lg:w-[500px] text-base lg:text-lg my-6 leading-relaxed">
                                {t('description1')}
                            </div>
                            <Link href={'/contact-us'}> <Button label={t('contactUs')} /></Link>
                        </div>
                    </div>

                    <div
                        className="about-two flex flex-col lg:flex-row items-stretch justify-between gap-5 lg:gap-0 mt-5 lg:mt-0"
                        ref={statsSection}
                    >
                        <div className="about-two-left flex flex-col lg:flex-row-reverse w-full lg:w-[50%] gap-0">
                            <div className="left-two w-full lg:w-[50%] flex justify-center items-center p-0">
                                <img
                                    src={'/images/security.webp'}
                                    alt="icon"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="left-one w-full lg:w-[50%] flex flex-col items-center justify-center">
                                <div className="relative mt-12 space-y-4">
                                    <div className="!text-5xl !font-semibold text-center">
                                        100%
                                    </div>
                                    <div className="badge absolute top-[-50px] bg-blue-400 rounded-full">
                                        <span className="p-3 text-white">
                                            01
                                        </span>
                                    </div>
                                    <div className="text-sm text-center mt-2 text-[#7B7B7B]">
                                        {t('clients')}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about-us-two-right w-full lg:w-[50%] flex items-center justify-center px-4">
                            <div className="right-text text-[#7B7B7B] leading-relaxed text-lg text-center lg:text-left">
                                {t('description2')}
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    )
}
