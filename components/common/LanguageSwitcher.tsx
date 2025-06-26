'use client'

import { useLanguageStore } from '@/lib/store/useLanguageStore'
import React, { useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

const LanguageSwitcher = () => {
    const [opened, setOpened] = useState(false)
    const locale = useLanguageStore((s) => s.locale)
    const setLocale = useLanguageStore((s) => s.setLocale)
    return (
        <div
            onClick={() => setOpened(!opened)}
            className="font-['playfair_display'] font-bold relative px-4 py-2 border-[1px] border-white rounded-md hover:cursor-pointer flex items-center justify-center gap-3"
        >
            {/* Affichage de l'icône et du texte pour la langue actuelle */}
            <img
                src={locale !== 'fr' ? '/icons/en.png' : '/icons/fr.png'}
                alt={locale !== 'fr' ? 'English' : 'Français'}
                className="w-5 h-5"
            />
            {locale !== 'fr' ? 'English' : 'Français'}
            <MdKeyboardArrowDown />
            <div
                className={`absolute w-full flex flex-col gap-1 bg-gray-500 top-full left-0 rounded-xl p-2 text-white z-50 ${
                    opened ? 'flex' : 'hidden'
                }`}
            >
                {/* Option Anglais */}

                <button
                    onClick={() => {
                        setLocale('en')
                        setOpened(false)
                    }}
                    className="w-full py-2 hover:bg-primary transition-colors rounded-md cursor-pointer px-1 flex items-center gap-2"
                >
                    <img
                        src="/icons/en.png"
                        alt="English"
                        className="w-5 h-5"
                    />
                    English
                </button>
                {/* Option Français */}

                <button
                    onClick={() => {
                        setLocale('fr')
                        setOpened(false)
                    }}
                    className="w-full py-2 hover:bg-primary transition-colors rounded-md cursor-pointer px-1 flex items-center gap-2"
                >
                    <img
                        src="/icons/fr.png"
                        alt="Français"
                        className="w-5 h-5"
                    />
                    Français
                </button>
            </div>
        </div>
    )
}

export default LanguageSwitcher
