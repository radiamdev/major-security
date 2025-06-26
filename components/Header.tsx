'use client'

import Link from 'next/link'
import React, { useRef, useState } from 'react'

import Container from './common/Container'
import Logo from './icons/Logo'
import Menu from './icons/Menu'
import { useClickOutSide } from '@/lib/hooks/useClickOutSide'
import Infos from './display/Infos'
import LanguageSwitcher from './common/LanguageSwitcher'
import { HeaderLinkType } from '@/type'
import SocialMedia from './common/SocialMedia'
import useTranslate from '@/lib/hooks/useTranslate'
import lang from '@/data/language/global.json'

const Header = () => {
    const [isNavDisplayed, setIsNavDisplayed] = useState<boolean>(false)
    const navigationRef = useRef<HTMLDivElement | null>(null)
    useClickOutSide(navigationRef, () => setIsNavDisplayed(false))

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

    return (
        <div className="w-screen h-fit fixed top-0 left-0 lg:static bg-foreground z-50 ">
            <Container
                tag="header"
                className="bg-blue-primary text-white pb-4 flex flex-col gap-2 md:gap-5 xl:gap-10"
            >
                <div className="w-full flex justify-between items-center border-b border-b-[#2A2A2A] ">
                    <Logo className="w-[60px] md:w-[70px]" />
                    <div className="flex items-center justify-center gap-[22px]">
                        <Infos
                            label="+261 37 79 118 84"
                            href="https://wa.me/261377911884"
                            iconName="phone"
                        />
                        <span className="h-4 w-0.5 bg-white"></span>
                        <Infos
                            label="contact@majorsecurity.com"
                            href="mailto:contact@majorsecurity.com"
                            iconName="mail"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div ref={navigationRef}>
                        <ul
                            className={`absolute top-full left-0 bg-blue-primary flex-col p-5 md:p-8 flex items-center justify-center gap-5 text-sm ${isNavDisplayed ? 'left-0' : 'left-[-100%]'} transition-all duration-300 lg:static lg:flex-row lg:p-0`}
                        >
                            {headerPageLink.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-lg font-lario hover:text-primary transition-colors duration-300"
                                        onClick={() => setIsNavDisplayed(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Menu
                            isClicked={isNavDisplayed}
                            onClick={() => setIsNavDisplayed(!isNavDisplayed)}
                        />
                    </div>
                    {/* Social media links */}
                    <SocialMedia />
                    {/* LanguageSwitcher */}
                    <LanguageSwitcher />{' '}
                </div>
            </Container>
        </div>
    )
}

export default Header
