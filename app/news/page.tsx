import Container from '@/components/common/Container'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import news from '@/data/news.json'
import Link from 'next/link'

export default function NewsPage() {
    return (
        <main className="w-full h-auto">
            <Header />
            <Container tag="section" className="py-16 pb-24">
                <h1 className="text-4xl font-bold mb-10">
                    Actualités de l'agence
                </h1>
                <div className="grid md:grid-cols-2 gap-6">
                    {news.map((item) => (
                        <Link
                            key={item.id}
                            href={`/news/${item.id}`}
                            className="block border rounded-lg p-5 shadow hover:shadow-md hover:bg-gray-100 transition"
                        >
                            <h2 className="text-xl font-semibold mb-2">
                                {item.title}
                            </h2>
                            <p className="text-sm text-gray-500 mb-2">
                                {new Date(item.date).toLocaleDateString()}
                            </p>
                            <p className="text-gray-700">{item.summary}</p>
                        </Link>
                    ))}
                </div>
            </Container>
            <Footer />
        </main>
    )
}
