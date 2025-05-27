'use client'
import React, { useState } from 'react'
import Container from './common/Container'
import Logo from './icons/Logo'
import Icon from './icons'
import { headerPageLink, headerSocialMediaLink } from '@/app/data.global'
import Link from 'next/link'
import Menu from './icons/Menu'

const Header = () => {
  const [isNavDisplayed, setIsNavDisplayed] = useState<boolean>(false)
  return (
    <div className='w-screen h-fit fixed top-0 left-0 bg-foreground z-50 ' >
      <Container tag='header' className='bg-foreground text-white pb-4 flex flex-col gap-2 md:gap-5 xl:gap-10' >
        <div className='w-full flex justify-between items-center' >
          <Logo className='w-[60px] md:w-[70px]' />
          <div className='flex items-center justify-center gap-[22px]' >
            <div className='flex items-center gap-3 hover:text-primary hover:cursor-pointer transition-colors duration-300' >
              <Icon name='phone' />
              <p className='hidden md:block' > +33 1 23 45 67 89</p>
            </div>
            <span className='h-4 w-0.5 bg-white' ></span>
            <div className='flex items-center gap-3 hover:text-primary hover:cursor-pointer transition-colors duration-300'>
              <Icon name='mail' />
              <p className='hidden md:block'> +33 1 23 45 67 89</p>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-between' >
          <ul className={`absolute top-full left-0 bg-foreground flex-col p-5 md:p-8 flex items-center justify-center gap-5 text-sm ${isNavDisplayed ? 'left-0' : 'left-[-100%]'} transition-all duration-300 lg:static lg:flex-row lg:p-0`} >
            {
              headerPageLink.map((link, id) => (
                <li key={id}>
                  <Link href={link.href} className='hover:text-primary transition-colors duration-300' >
                    {link.label}
                  </Link>
                </li>
              ))
            }
          </ul>
          <Menu isClicked={isNavDisplayed} onClick={() => setIsNavDisplayed(!isNavDisplayed)} />
          <ul className='flex items-center justify-center gap-3 md:gap-5 text-sm' >
            {
              headerSocialMediaLink.map((link, id) => (
                <li key={id}>
                  <Link href={link.href} className='text-black hover:text-primary/60 transition-colors' > <Icon name={link.iconName} /> </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default Header