import type { Metadata } from 'next'
import './globals.css'
import { Bounce, ToastContainer } from 'react-toastify'
import ScrollToTopButton from '@/components/common/ScrollToTopButton'

export const metadata: Metadata = {
    title: 'Major Security | Sécurité pour entreprises, biens et événements',
    description:
        'Notre mission est simple : garantir la sécurité de votre entreprise, de vos biens et de vos événements, peu importe leur taille ou leur complexité.',
    keywords: [
        'sécurité',
        'entreprise',
        'événement',
        'protection',
        'gardiennage',
        'surveillance',
        'agents de sécurité',
        'sécurité privée',
        'Major Security',
    ],
    icons: {
        icon: '/favicon.ico',
    },
    authors: [{ name: 'Major Security' }],
    creator: 'Major Security',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="fr-FR">
            <body className={`antialiased`}>
                {children}
                <ScrollToTopButton />
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    transition={Bounce}
                />
            </body>
        </html>
    )
}
