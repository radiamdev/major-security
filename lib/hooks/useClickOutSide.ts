import { useEffect } from 'react'

export const useClickOutSide = (
    ref: React.RefObject<HTMLElement | null>,
    fn: () => void
) => {
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                fn()
            }
        }
        window.addEventListener('mousedown', handleClickOutside)
        return () => window.removeEventListener('mousedown', handleClickOutside)
    }, [ref, fn])
}
