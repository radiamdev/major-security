'use client'
import { useRef } from 'react'
import Container from '../common/Container'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'
import Button from '../common/Button'
import useTranslate from '@/lib/hooks/useTranslate'
import lang from '@/data/language/services.json'

gsap.registerPlugin(ScrollTrigger)

export default function ServicePage() {
    const serviceCards = useRef(null)

    useGSAP(() => {
        gsap.fromTo(
            gsap.utils.toArray('.service-card'),
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: serviceCards.current,
                    start: 'top 80%',
                },
            }
        )
    }, [])

    // Translation
    const t = useTranslate(lang)

    const services = [
        {
            title: t('title1'),
            description: t('description1'),
            image: '/images/chantier.webp',
            alt: 'chantier',
        },
        {
            title: t('title2'),
            description: t('description2'),
            image: '/images/incendie.webp',
            alt: 'incendie',
        },
        {
            title: t('title3'),
            description: t('description3'),
            image: '/images/cyber.webp',
            alt: 'technologie',
        },
        {
            title: t('title4'),
            description: t('description4'),
            image: '/images/evenement.webp',
            alt: 'événement',
        },
    ]

    return (
        <div className="bg-gray-primary">
            <Container
                tag="section"
                id="service"
                className="bg-gray-primary py-24"
            >
                <div className="text-black px-6 lg::px-16">
                    {/* <p className="text-sm text-gray-500">Nos services</p> */}

                    <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-12">
                        <div className="md:w-1/2">
                            <h1 className="!text-5xl !font-bold md:text-5xl leading-tight">
                                {t('title')}
                            </h1>
                        </div>

                        <div className="md:w-1/2 flex flex-col justify-between">
                            <p className="text-gray-700 !text-xl mb-6">
                                {t('description')}
                            </p>
                            <div className="flex justify-end">
                                <Link href={'/contact-us'}>
                                    {' '}
                                    <Button label={t('contactUs')} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Cartes de services avec animation */}
                    <div
                        ref={serviceCards}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="service-card bg-[#0A1A2F] text-white rounded-lg overflow-hidden shadow-md flex flex-col "
                            >
                                <div className="p-6 flex-1 pb-14">
                                    <h3 className="!text-2xl font-semibold mb-3 text-center">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-gray-300 mt-4 text-center">
                                        {service.description}
                                    </p>
                                </div>
                                <img
                                    src={service.image}
                                    alt={service.alt}
                                    className="h-40 w-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}
