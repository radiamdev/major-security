'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'react-toastify'

type NewsField = 'id' | 'title' | 'date' | 'summary' | 'content'

export default function AdminPage() {
    const [password, setPassword] = useState('')
    const [authorized, setAuthorized] = useState(false)
    const [newsList, setNewsList] = useState([
        {
            id: '',
            title: '',
            date: '',
            summary: '',
            content: '',
        },
    ])

    const router = useRouter()

    const correctPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD

    const handlePasswordSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (password === correctPassword) {
            setAuthorized(true)
            toast.success('Connexion réussie')
        } else {
            toast.error('Mot de passe incorrect')
        }
    }

    const handleAddNews = () => {
        setNewsList([
            ...newsList,
            { id: '', title: '', date: '', summary: '', content: '' },
        ])
    }

    const handleChange = (index: number, key: NewsField, value: string) => {
        const updated = [...newsList]
        updated[index][key] = value
        setNewsList(updated)
    }

    const handleBackHome = () => {
        router.replace('/')
    }

    const handleDownload = () => {
        const blob = new Blob([JSON.stringify(newsList, null, 2)], {
            type: 'application/json',
        })
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = 'news.json'
        link.click()
        URL.revokeObjectURL(url)
        toast.success('Fichier news.json prêt à être téléchargé')
    }

    if (!authorized) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <form
                    onSubmit={handlePasswordSubmit}
                    className="border p-6 rounded-lg shadow w-full max-w-sm"
                >
                    <h2 className="text-xl font-bold mb-4">Accès admin</h2>
                    <input
                        type="password"
                        placeholder="Mot de passe"
                        className="w-full border px-4 py-2 rounded mb-4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-2 rounded hover:bg-amber-200 cursor-pointer"
                    >
                        Se connecter
                    </button>
                </form>
            </div>
        )
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-6">Gestion des actualités</h1>
            <button
                onClick={handleAddNews}
                className="mb-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer"
            >
                + Ajouter une actualité
            </button>
            <div className="space-y-8">
                {newsList.map((news, index) => (
                    <div key={index} className="border p-4 rounded shadow">
                        <input
                            type="text"
                            placeholder="ID (ex: recrutement-2025)"
                            value={news.id}
                            onChange={(e) =>
                                handleChange(index, 'id', e.target.value)
                            }
                            className="w-full mb-2 border px-3 py-1 rounded"
                        />
                        <input
                            type="text"
                            placeholder="Titre"
                            value={news.title}
                            onChange={(e) =>
                                handleChange(index, 'title', e.target.value)
                            }
                            className="w-full mb-2 border px-3 py-1 rounded"
                        />
                        <input
                            type="date"
                            value={news.date}
                            onChange={(e) =>
                                handleChange(index, 'date', e.target.value)
                            }
                            className="w-full mb-2 border px-3 py-1 rounded"
                        />
                        <textarea
                            placeholder="Résumé"
                            value={news.summary}
                            onChange={(e) =>
                                handleChange(index, 'summary', e.target.value)
                            }
                            className="w-full mb-2 border px-3 py-2 rounded"
                        />
                        <textarea
                            placeholder="Contenu (utilise \\n pour retour à la ligne)"
                            value={news.content}
                            onChange={(e) =>
                                handleChange(index, 'content', e.target.value)
                            }
                            className="w-full border px-3 py-2 rounded"
                            rows={4}
                        />
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-end gap-6 mt-8">
                <button
                    onClick={handleAddNews}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer"
                >
                    + Ajouter une actualité
                </button>
                <button
                    onClick={handleBackHome}
                    className="bg-primary text-blackf font-bold px-6 py-2 rounded hover:bg-amber-200 cursor-pointer"
                >
                    Revenir à la page d'accueil
                </button>
                <button
                    onClick={handleDownload}
                    className="bg-primary text-blackf font-bold px-6 py-2 rounded hover:bg-amber-200 cursor-pointer"
                >
                    Télécharger news.json
                </button>
            </div>
        </div>
    )
}
