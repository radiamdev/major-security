import { headerPageLink } from '@/app/data.global'
import Link from 'next/link'
import React from 'react'
import Logo from './icons/Logo'

const contactInfo = [
    '📍 12 Rue de la Sécurité, 75000 Paris, France',
    '📞 +261 37 79 118 84',
    '✉️ contact@majorsecurity.com',
    '🕒 Disponible 24h/24 – 7j/7',
]

const FooterContent = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 border-y-2 border-gray-primary py-6 gap-8">
            <div className="flex flex-col items-center justify-center gap-4">
                <Logo className="w-[60px] md:w-[70px]" />
                <p className="text-white text-justify">
                    Chez Major Security, nous avons une mission claire : vous
                    garantir une protection fiable, constante et adaptée à vos
                    besoins, quelle que soit la taille de votre entreprise,
                    l&apos;envergure de votre projet ou la complexité du site à
                    sécuriser.
                </p>
            </div>
            <div className="space-y-6 lg:ml-32 sm:ml-8 ml-0">
                <h2 className="text-white text-xl">Liens rapide</h2>
                <ul className="space-y-2">
                    {headerPageLink.map((link) => (
                        <li key={link.label}>
                            <Link
                                href={link.href}
                                className="text-white hover:text-primary transition-colors duration-300"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="space-y-6">
                <h2 className="text-white text-xl">Contact</h2>
                <ul className="space-y-2">
                    {contactInfo.map((item) => (
                        <li
                            key={item}
                            className="text-white"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FooterContent
