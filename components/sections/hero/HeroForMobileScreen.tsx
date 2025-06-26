'use client'

import Link from 'next/link'
import Container from '../../common/Container'
import Icon from '../../icons'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import useTranslate from '@/lib/hooks/useTranslate'
import lang from '@/data/language/hero.json'

const HeroForMobileScreen = () => {
    const majorRef = useRef(null)
    const securityRef = useRef(null)
    const shieldRef = useRef(null)
    const descriptionRef = useRef(null)
    const statsRef = useRef(null)
    const buttonsRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline()

        // 1. Animation du bouclier d'abord
        tl.fromTo(
            shieldRef.current,
            { opacity: 0, scale: 0.8, y: 50 },
            { opacity: 1, scale: 1, y: 0, duration: 1, ease: 'power2.out' }
        );

        // 2. Animation MAJOR depuis la gauche
        tl.fromTo(
            majorRef.current,
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' },
            '-=0.3'
        ); 

        // 3. Animation SECURITY depuis la droite
        tl.fromTo(
            securityRef.current,
            { x: 100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' },
            '-=0.8'
        );

        // 4. Animation de la description
        tl.fromTo(
            descriptionRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
            '-=0.5'
        );

        // 5. Animation des stats
        tl.fromTo(
            statsRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
            '-=0.6'
        );

        // 6. Animation des boutons
        tl.fromTo(
            buttonsRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
            '-=0.4'
        );
    }, [])

    // Translation
    const t = useTranslate(lang)

    return (
        <div id="home" className="w-screen bg-white">
            <Container className="px-4 py-8 min-h-screen">
                {/* Section principale centrée */}
                <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
                    {/* Logo et Titre Principal */}
                    <div className="flex flex-col items-center">
                        {/* Image du bouclier */}
                        <img
                            ref={shieldRef}
                            alt="hero image"
                            src={'/images/hero-shield.webp'}
                            className="w-48 h-auto opacity-0 select-none mb-4"
                        />

                        {/* Texte principal superposé */}
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-center space-y-8">
                                {/* MAJOR */}
                                <h1
                                    ref={majorRef}
                                    className="!text-5xl font-black text-transparent tracking-wider uppercase select-none opacity-0"
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
                                    className="!text-5xl font-black text-blue-primary tracking-wider uppercase select-none opacity-0"
                                    style={{
                                        fontFamily: 'Arial Black, sans-serif',
                                    }}
                                >
                                    SECURITY
                                </h1>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div
                        ref={descriptionRef}
                        className="max-w-sm text-center opacity-0"
                    >
                        <p className="text-sm leading-relaxed text-gray-700">
                            {t('description')}
                        </p>
                    </div>

                    {/* Stats Section */}
                    <div
                        ref={statsRef}
                        className="flex flex-col items-center space-y-4 opacity-0"
                    >
                        {/* 100% Clients satisfaits */}
                        <div className="flex flex-col items-center py-4 px-8 border-t border-b border-blue-primary">
                            <span className="text-3xl font-bold text-black">
                                100%
                            </span>
                            <span className="text-sm text-gray-600">
                                {t('clients')}
                            </span>
                        </div>

                        {/* Services */}
                        <div className="text-center">
                            <p className="text-sm font-semibold text-black">
                                {t('subtitle1')} • {t('subtitle2')}
                            </p>
                        </div>
                    </div>

                    {/* Boutons d'action */}
                    <div
                        ref={buttonsRef}
                        className="flex flex-col w-full max-w-xs space-y-4 opacity-0"
                    >
                        {/* Bouton Services */}
                        <Link href={'#service'}>
                            <div className="w-full flex items-center h-14 cursor-pointer hover:opacity-90 transition-opacity rounded-lg overflow-hidden shadow-lg">
                                <span className="h-full flex items-center justify-center px-4 bg-[#B6B7B6]">
                                    <Icon
                                        className="text-white text-lg"
                                        name="play"
                                    />
                                </span>
                                <span className="flex-1 h-full flex items-center justify-center bg-[#2A2A2A] text-white text-base font-medium">
                                    {t('ourServices')}
                                </span>
                            </div>
                        </Link>

                        {/* Bouton Contact */}
                        <Link href={'/contact-us'} className="w-full">
                            <div className="w-full bg-primary hover:bg-blue-primary text-white py-4 rounded-lg text-center transition-colors shadow-lg">
                                <span className="text-base font-medium">
                                    {t('contactUs')}
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HeroForMobileScreen
