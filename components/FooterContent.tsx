import Link from 'next/link'
import React from 'react'
import Logo from './icons/Logo'
import useTranslate from '@/lib/hooks/useTranslate'
import lang from '@/data/language/global.json'
import { HeaderLinkType } from '@/type'

const FooterContent = () => {
    const t = useTranslate(lang)

    const headerPageLink: HeaderLinkType[] = [
        {
            label: t('header.home'),
            href: '/',
        },
        {
            label: t('header.about'),
            href: '/#about',
        },
        {
            label: t('header.services'),
            href: '/#service',
        },
        {
            label: t('header.whyUs'),
            href: '/#why',
        },
        // {
        //     label: t('header.news'),
        //     href: '/news',
        // },
        {
            label: t('header.contact'),
            href: '/contact-us',
        },
    ]

    const contactInfo = [
        '📍 IVG 106 Ankadifotsy Antananarivo',
        '📞 +261 37 79 118 84',
        '✉️ contact@majorsecurity.com',
        `🕒 ${t('footer.available')} 24h/24 – 7j/7`,
    ]
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 border-y-2 border-gray-primary py-6 gap-8">
            <div className="flex flex-col items-center justify-center gap-4">
                <Logo className="w-[60px] md:w-[70px]" />
                <p className="text-white text-justify ">
                    {t('footer.description')}
                </p>
            </div>
            <div className="space-y-6 lg:ml-32 sm:ml-8 ml-0 text-center">
                <h2 className="text-white text-xl font-swap">{t('footer.quickLinks')}</h2>
                <ul className="space-y-5">
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
            <div className="space-y-6 text-center">
                <h2 className="text-white text-xl font-swap">{t('footer.contact')}</h2>
                <ul className="space-y-5">
                    {contactInfo.map((item) => (
                        <li key={item} className="text-white">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FooterContent
