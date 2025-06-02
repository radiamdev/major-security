import { HeaderLinkType, SocialMediaLink } from '@/type'
import { FaFacebook, FaEnvelope, FaMapMarked } from 'react-icons/fa'

export const headerPageLink: HeaderLinkType[] = [
    {
        label: 'Accueil',
        href: '#home',
    },
    {
        label: 'A propos de nous ',
        href: '#about',
    },
    {
        label: 'Nos services',
        href: '#service',
    },
    {
        label: 'Pourquoi nous',
        href: '#why',
    },
    {
        label: 'Contact',
        href: '#contact',
    },
]

// Données des liens de médias sociaux
export const headerSocialMediaLink: SocialMediaLink[] = [
    {
        id: 'facebook',
        href: 'https://www.facebook.com/share/19A2gvtRvC/',
        icon: FaFacebook,
        label: 'Facebook',
        size: 18,
    },
    {
        id: 'email',
        href: 'mailto:contact@major-security.mg',
        icon: FaEnvelope,
        label: 'Email',
        size: 16,
    },
    {
        id: 'map',
        href: 'https://www.google.com/maps/search/Adresse+IVG+106+Ankadifotsy/@-18.8978039,47.5232314,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D',
        icon: FaMapMarked,
        label: 'Adresse',
        size: 18,
    },
]
