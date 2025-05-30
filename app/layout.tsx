import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: "Major Security | Sécurité pour entreprises, biens et événements",
    description:
        "Notre mission est simple : garantir la sécurité de votre entreprise, de vos biens et de vos événements, peu importe leur taille ou leur complexité.",
    keywords: [
        "sécurité",
        "entreprise",
        "événement",
        "protection",
        "gardiennage",
        "surveillance",
        "agents de sécurité",
        "sécurité privée",
        "Major Security"
    ],
    icons: {
        icon: "/favicon.ico",
    },
    authors: [{ name: "Major Security" }],
    creator: "Major Security",
};



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
