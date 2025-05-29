'use client'
import Link from 'next/link'
import React, { useRef, useState } from 'react'

import Container from './common/Container'
import Logo from './icons/Logo'
import Icon from './icons'
import { headerPageLink, headerSocialMediaLink } from '@/app/data.global'
import Menu from './icons/Menu'
import { useClickOutSide } from '@/hooks/useClickOutSide'
import Infos from './display/Infos'

const Header = () => {
  const [isNavDisplayed, setIsNavDisplayed] = useState<boolean>(false)
  const navigationRef = useRef<HTMLDivElement | null>(null)
  useClickOutSide(navigationRef, () => setIsNavDisplayed(false))

  return (
    <div className="w-screen h-fit fixed top-0 left-0 bg-foreground z-50 ">
      <Container
        tag="header"
        className="bg-foreground text-white pb-4 flex flex-col gap-2 md:gap-5 xl:gap-10"
      >
        <div className="w-full flex justify-between items-center border-b border-b-[#2A2A2A] ">
          <Logo className="w-[60px] md:w-[70px]" />
          <div className="flex items-center justify-center gap-[22px]">
            <Infos
              label='+33 1 23 45 67 89'
              href='https://wa.me/33123456789'
              iconName='phone'
            />
            <span className="h-4 w-0.5 bg-white"></span>
            <Infos
              label='contact@majorsecurity.com'
              href='mailto:contact@majorsecurity.com'
              iconName='mail'
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div ref={navigationRef}>
            <ul
              className={`absolute top-full left-0 bg-foreground flex-col p-5 md:p-8 flex items-center justify-center gap-5 text-sm ${isNavDisplayed ? 'left-0' : 'left-[-100%]'} transition-all duration-300 lg:static lg:flex-row lg:p-0`}
            >
              {headerPageLink.map((link, id) => (
                <li key={id}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors duration-300"
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
          <ul className="flex items-center justify-center gap-3 md:gap-5 text-sm">
            {headerSocialMediaLink.map((link, id) => (
              <li key={id}>
                <Link
                  href={link.href}
                  target="_blank"
                  className="text-black hover:text-primary/60 transition-colors"
                >
                  <Icon name={link.iconName} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default Header
