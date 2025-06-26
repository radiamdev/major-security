import { headerPageLink, headerSocialMediaLink } from '@/constants'
import Link from 'next/link'

const SocialMedia = () => {
    return (
        <ul className="flex items-center justify-center gap-3 md:gap-5 text-sm">
            {headerSocialMediaLink.map((link) => {
                const IconComponent = link.icon
                return (
                    <li key={link.id}>
                        <Link
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-8 h-auto aspect-square bg-black/60 hover:bg-primary rounded-md text-white duration-300 transition-colors"
                            aria-label={link.label}
                        >
                            <IconComponent size={link.size ?? 20} />
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default SocialMedia
