"use client"

import Link from 'next/link'
import Container from '../../common/Container'
import Icon from '../../icons'
import Button from '../../common/Button'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import useTranslate from '@/lib/hooks/useTranslate'
import lang from '@/data/language/hero.json'

const HeroForDesktopScreen = () => {
    const majorRef = useRef(null)
    const securityRef = useRef(null)
    const shieldRef = useRef(null)
    const topLeftRef = useRef(null)
    const topRightRef = useRef(null)
    const bottomLeftRef = useRef(null)
    const bottomRightRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline()

        // Animation du bouclier (fade in)
        tl.fromTo(
            shieldRef.current,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
        )

        // Animation MAJOR depuis la gauche
        tl.fromTo(
            majorRef.current,
            { x: -200, opacity: 0 },
            { x: 0, opacity: 1, duration: 1.8, ease: 'power3.out' },
            '-=0.5'
        )

        // Animation SECURITY depuis la droite
        tl.fromTo(
            securityRef.current,
            { x: 200, opacity: 0 },
            { x: 0, opacity: 1, duration: 1.8, ease: 'power3.out' },
            '-=0.8'
        )

        // Animation des éléments périphériques
        tl.fromTo(
            [
                topLeftRef.current,
                topRightRef.current,
                bottomLeftRef.current,
                bottomRightRef.current,
            ],
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power2.out',
            },
            '-=0.5'
        )
    }, [])

    // Translation
    const t = useTranslate(lang)

    return (
        <div id="home" className="w-screen bg-white">
            <Container
                tag="section"
                className="py-8 md:py-16 relative min-h-screen"
            >
                {/* TOP */}
                <div className="w-full flex items-center justify-between">
                    {/* Top Left */}
                    <div
                        ref={topLeftRef}
                        className="max-w-xs md:max-w-sm absolute top-4 left-4 md:top-16 md:left-20 opacity-0"
                    >
                        <p className="!text-sm md:!text-xl !font-normal text-black leading-relaxed">
                            {t('description')}
                        </p>
                    </div>
                    {/* Top Right */}
                    <div
                        ref={topRightRef}
                        className="flex flex-col items-center justify-center gap-4 md:gap-8 absolute top-4 right-4 md:top-16 md:right-20 opacity-0"
                    >
                        <div className="flex flex-col items-center gap-2 py-4 md:py-6 border-y-[1px] border-blue-primary">
                            <p className="!text-2xl md:!text-3xl font-semibold text-black">
                                100%
                            </p>
                            <p className="!text-sm md:!text-xl text-black">
                                {t('clients')}
                            </p>
                        </div>
                        <p className="!text-sm md:!text-lg !font-semibold text-black text-center">
                           {t('subtitle1')} <br />
                             {t('subtitle2')}
                        </p>
                    </div>
                </div>

                {/* CENTER - Section principale */}
                <div className="flex flex-col items-center justify-center py-8 md:py-12 relative">
                    {/* Image du bouclier */}
                    <img
                        ref={shieldRef}
                        alt="hero image"
                        src={'/images/hero-shield.webp'}
                        className="w-48 md:w-80 h-auto z-50 opacity-0 animate-bouncing select-none"
                    />

                    {/* Texte superposé */}
                    <div className="absolute lg:top-1/2 top-0 lg:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
                        <div className="text-center space-y-2 md:space-y-8">
                            {/* MAJOR */}
                            <h1
                                ref={majorRef}
                                className="!text-4xl md:!text-7xl lg:!text-9xl font-black text-center text-transparent bg-clip-text bg-white stroke-1 stroke-blue-primary tracking-wider uppercase select-none opacity-0"
                                style={{
                                    WebkitTextStroke: '1px #09161e',
                                    WebkitTextFillColor: 'transparent',
                                    fontFamily: 'Arial Black, sans-serif',
                                }}
                            >
                                MAJOR
                            </h1>
                            {/* SECURITY */}
                            <h1
                                ref={securityRef}
                                className="!text-4xl md:!text-7xl lg:!text-9xl font-black text-blue-primary tracking-wider uppercase select-none opacity-0"
                                style={{
                                    fontFamily: 'Arial Black, sans-serif',
                                }}
                            >
                                SECURITY
                            </h1>
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="w-full flex items-center justify-between">
                    {/* Bottom Left */}
                    <div
                        ref={bottomLeftRef}
                        className="max-w-md absolute bottom-4 left-4 md:bottom-16 md:left-20 opacity-0"
                    >
                        {/* Our services button */}
                        <Link href={'#service'}>
                            <div className="flex items-center h-16 md:h-[92px] cursor-pointer hover:opacity-90 transition-opacity">
                                <span className="h-full flex items-center justify-center px-3 md:px-5 bg-[#B6B7B6]">
                                    <Icon
                                        className="text-white text-lg md:text-xl"
                                        name="play"
                                    />
                                </span>
                                <span className="h-full flex items-center justify-center px-6 md:px-10 bg-[#2A2A2A] text-white !text-sm md:!text-xl whitespace-nowrap">
                                    {t('ourServices')}
                                </span>
                            </div>
                        </Link>
                    </div>
                    {/* Bottom Right */}
                    <div
                        ref={bottomRightRef}
                        className="flex flex-col items-center justify-center gap-4 md:gap-8 absolute bottom-4 right-4 md:bottom-16 md:right-20 opacity-0"
                    >
                        {/* Contact us button */}
                        <Link href={'/contact-us'}>
                            <Button label={t('contactUs')} />
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HeroForDesktopScreen
