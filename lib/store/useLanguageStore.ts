import { create } from 'zustand'

type Locale = 'en' | 'fr'

interface LanguageStore {
    locale: Locale
    setLocale: (lang: Locale) => void
}

export const useLanguageStore = create<LanguageStore>((set) => ({
    locale: 'en', // langue par défaut
    setLocale: (lang) => set({ locale: lang }),
}))