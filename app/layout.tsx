import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Major Security',
    description: 'Major security website',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="fr-FR">
            <body className={`${poppins.className} antialiased`}>
                {children}
            </body>
        </html>
    )
}
