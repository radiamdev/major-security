import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Container from '@/components/common/Container'
import news from '@/data/news.json'

// ✅ Générer les métadonnées dynamiques - params est maintenant une Promise
export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>
}): Promise<Metadata> {
    const { id } = await params
    const item = news.find((n) => n.id === id)

    if (!item) {
        return {
            title: 'Actualité non trouvée',
            description: "Cette actualité n'existe pas ou a été supprimée.",
        }
    }

    return {
        title: item.title,
        description: item.content?.slice(0, 160),
    }
}

// ✅ Générer les chemins statiques (SSG)
export async function generateStaticParams() {
    return news.map((n) => ({
        id: n.id,
    }))
}

// ✅ Page principale - params est maintenant une Promise
export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    const item = news.find((n) => n.id === id)

    if (!item) return notFound()

    return (
        <main className="w-full h-auto">
            <Header />
            <Container tag="section" className="py-16 pb-24">
                <h1 className="text-3xl font-bold">{item.title}</h1>
                <p className="text-gray-500 mb-4">
                    {new Date(item.date).toLocaleDateString()}
                </p>
                <p className="whitespace-pre-line">{item.content}</p>
            </Container>
            <Footer />
        </main>
    )
}
