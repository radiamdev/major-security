"use client"

import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    if (!visible) return null

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-24 lg:bottom-5 right-5 p-3 bg-primary text-white rounded-full shadow-xl hover:bg-blue-primary transition-all z-50 cursor-pointer"
            aria-label="Scroll to top"
        >
            <FaArrowUp />
        </button>
    )
}