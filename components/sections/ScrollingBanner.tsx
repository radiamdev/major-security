"use client"

import React, { useEffect } from 'react'
import useTranslate from '@/lib/hooks/useTranslate'
import lang from '@/data/language/hero.json'

const ScrollingBanner = () => {
    useEffect(() => {
        // Injecter les styles CSS dans le document
        const style = document.createElement('style')
        style.textContent = `
            @keyframes scrolling-banner {
                0% {
                    transform: translateX(100%);
                }
                100% {
                    transform: translateX(-100%);
                }
            }
            
            .scrolling-text {
                animation: scrolling-banner 25s linear infinite;
            }
            
            .scrolling-text:hover {
                animation-play-state: paused;
            }
        `
        document.head.appendChild(style)
        
        return () => {
            document.head.removeChild(style)
        }
    }, [])

    // Translation
        const t = useTranslate(lang)

    return (
        <div className="w-full bg-blue-primary py-3 md:py-4 overflow-hidden relative">
            {/* Bande défilante */}
            <div className="flex whitespace-nowrap scrolling-text">
                {/* Répétition du texte pour un défilement continu */}
                {[...Array(25)].map((_, index) => (
                    <div key={index} className="flex items-center flex-shrink-0">
                        <span className="text-white !text-base md:!text-xl !font-semibold mx-6 md:mx-8">
                            {t('assurance')}
                        </span>
                        <span className="text-white !text-xl md:!text-2xl mx-3 md:mx-4">✱</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ScrollingBanner