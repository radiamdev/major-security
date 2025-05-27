import React from 'react'
import Container from './common/Container'
import Logo from './icons/Logo'
import Icon from './icons'
import { headerPageLink, headerSocialMediaLink } from '@/app/data.global'
import Link from 'next/link'

const Header = () => {
  return (
    <Container>
      <div className='w-full flex justify-between items-center' >
        <Logo />
        <div className='flex items-center gap-3' >
          <Icon name='phone' />
          <p> +33 1 23 45 67 89</p>
        </div>
        <span></span>
        <div className='flex items-center gap-3'>
          <Icon name='mail' />
          <p> +33 1 23 45 67 89</p>
        </div>
      </div>

      <div>
        <ul>
          {
            headerPageLink.map((link, id) => (
              <li key={id}>
                <Link href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))
          }
        </ul>
        <ul>
          {
            headerSocialMediaLink.map((link, id) => (
              <li key={id}>
                <Link href={link.href} > <Icon name={link.iconName} /> </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </Container>
  )
}

export default Header