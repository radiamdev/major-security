import React from 'react'
import news from '@/data/news.json'
import Link from 'next/link'
import Container from '../common/Container'

const LastNews = () => {
    const latestNews = news.slice(0, 2) // les 2 plus récentes
    return (
        <div className="w-screen h-fit bg-gray-primary">
            <Container
                tag="section"
                id="news"
                className="bg-gray-primary py-16 lg:pt-44"
            >
                <div className="flex flex-col items-center gap-8">
                    <h2 className="text-3xl font-bold text-center">
                        Dernières actualités
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {latestNews.map((item) => (
                            <div
                                key={item.id}
                                className="border rounded-lg p-6 shadow-sm bg-gray-50 hover:shadow-md transition"
                            >
                                <h3 className="text-xl font-semibold mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-500 mb-2">
                                    {new Date(item.date).toLocaleDateString()}
                                </p>
                                <p className="text-gray-700 mb-4">
                                    {item.summary}
                                </p>
                                <Link
                                    href={`/news/${item.id}`}
                                    className="text-primary font-bold hover:underline"
                                >
                                    Voir plus →
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <Link
                            href="/news"
                            className="inline-block bg-primary text-black font-bold px-8 py-4 rounded-full hover:bg-amber-200 transition"
                        >
                            Toutes les actualités
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default LastNews
