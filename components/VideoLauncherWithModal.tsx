'use client'

import { useRef, useState, useEffect } from 'react'
import { IoMdClose, IoIosPlayCircle } from 'react-icons/io'

export default function VideoLauncherWithModal() {
    const [isOpen, setIsOpen] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        const handleEnded = () => setIsOpen(false)
        video.addEventListener('ended', handleEnded)
        return () => video.removeEventListener('ended', handleEnded)
    }, [])

    return (
        <>
            {/* Bouton Play fixe et pulsant */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed lg:right-8 lg:top-1/2 right-4 bottom-4 transform -translate-y-1/2 z-50 bg-primary rounded-full hover:scale-110 transition duration-300 shadow-2xl cursor-pointer w-12 h-12 flex items-center justify-center"
                    aria-label="Play video"
                >
                    <IoIosPlayCircle className="text-white !text-3xl animate-pulse" />
                </button>
            )}

            {/* Modal vidéo */}
            {isOpen && (
                <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/90">
                    {/* Overlay cliquable */}
                    <button
                        className="absolute inset-0 z-40 cursor-pointer"
                        onClick={() => setIsOpen(false)}
                    />

                    <div className="relative z-50 w-full h-full flex items-center justify-center p-4">
                        <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
                            <video
                                ref={videoRef}
                                autoPlay
                                playsInline
                                controls
                                className="w-full h-full object-cover"
                            >
                                <source
                                    src="/videos/presentation.mp4"
                                    type="video/mp4"
                                />
                                <track
                                    kind="captions"
                                    srcLang="fr"
                                    src="/videos/presentation.vtt"
                                />
                                Your browser does not support the video tag.
                            </video>

                            {/* Bouton de fermeture */}
                            <button
                                className="absolute top-2 right-2 text-white text-2xl z-50 p-1.5 rounded-full bg-black/60 hover:bg-black/80 cursor-pointer"
                                onClick={() => setIsOpen(false)}
                                aria-label="Fermer la vidéo"
                            >
                                <IoMdClose />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
