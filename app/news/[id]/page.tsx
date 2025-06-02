import Container from '@/components/common/Container'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import news from '@/data/news.json'
import { notFound } from 'next/navigation'

export default function NewsDetail({ params }: { params: { id: string } }) {
    const item = news.find((n) => n.id === params.id)

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
