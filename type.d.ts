// this file is used to define the types for the entire app

import { IconBaseProps } from 'react-icons'
import { IconType } from './components/icons'

export interface HeaderLinkType {
    label: string
    href: string 
}

// Type pour définir la structure d'un lien de média social
export interface SocialMediaLink {
    id: string
    href: string
    icon: ComponentType<IconBaseProps>
    label: string // Pour l'accessibilité
    size?: number
}
export interface ButtonProps {
    label: string
    icon?: keyof IconType
    iconVariant?: IconVariant
    className?: string
    type?: 'submit' | 'button'
    onClick?: () => void
}

export interface InfosProps {
    label: string
    href: string
    iconName: keyof IconType
}

export interface MailType {
    name: string
    email: string
    subject?: string
    message?: string
}