'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Container from '../common/Container'
import useTranslate from '@/lib/hooks/useTranslate'
import lang from '@/data/language/why.json'

gsap.registerPlugin(ScrollTrigger)

export default function WhyPage() {
    const avantageRef = useRef(null)

    useGSAP(() => {
        gsap.fromTo(
            gsap.utils.toArray('.advantage-card'),
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: avantageRef.current,
                    start: 'top 80%',
                },
            }
        )
    }, [])

    // Translation
    const t = useTranslate(lang)

    const avantages = [
        {
            icon: '/icons/icon.png',
            alt: 'Expertise',
            title: t('title1'),
            text: t('text1'),
        },
        {
            icon: '/icons/icon1.png',
            alt: 'Service sur mesure',
            title: t('title2'),
            text: t('text2'),
        },
        {
            icon: '/icons/icon2.png',
            alt: 'Moyens humains et matériels',
            title: t('title3'),
            text: t('text3'),
        },
        {
            icon: '/icons/icon3.png',
            alt: 'Polyvalence des services',
            title: t('title4'),
            text: t('text4'),
        },
        {
            icon: '/icons/icon4.png',
            alt: 'Écoute et accompagnement',
            title: t('title5'),
            text: t('text5'),
        },
        {
            icon: '/icons/icon5.png',
            alt: 'Transparence & confiance',
            title: t('title6'),
            text: t('text6'),
        },
    ]

    return (
        <div>
            <Container tag="section" id="why" className="py-16">
                <div className="px-4 max-w-7xl mx-auto" ref={avantageRef}>
                    <p className="text-gray-500 text-center md:text-left !text-lg">
                        {t('subtitle')}
                    </p>
                    <h2 className="!text-5xl !font-bold mt-6 mb-10 text-center md:text-left">
                        {t('title')}
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {avantages.map((item, index) => (
                            <div
                                key={index}
                                className="advantage-card flex items-start space-x-4 border-t-2 border-gray-600 pt-6"
                            >
                                <img
                                    src={item.icon}
                                    alt={item.alt}
                                    className="w-10 h-10 hover:animate-bounce transition-all duration-300 hover:cursor-pointer"
                                />
                                <div className="space-y-2">
                                    <h3 className="!font-semibold text-xl">
                                        {item.title}
                                    </h3>
                                    <p className="text-lg text-gray-600">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}
