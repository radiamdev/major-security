import Link from 'next/link'
import React from 'react'
import Icon from '../icons'
import { InfosProps } from '@/type'

function Infos(props: InfosProps) {
  const { label, href, iconName } = props
  return (
    <Link href={href} target='_blank' >
      <div className="flex items-center gap-3 hover:text-primary hover:cursor-pointer transition-colors duration-300">
        <Icon name={iconName} />
        <p className="hidden md:block">
          {label}
        </p>
      </div>
    </Link>
  )
}

export default Infos