import { useLanguageStore } from '../store/useLanguageStore'

type TranslationValue = string | string[] | TranslationJson
type TranslationJson = {
    [key: string]: TranslationValue
}

// 🔧 Résout une clé imbriquée à partir de "a.b.c"
function resolveNestedKey(
    obj: TranslationJson,
    path: string
): TranslationValue | undefined {
    return path.split('.').reduce((acc: unknown, key: string) => {
        if (typeof acc === 'object' && acc !== null && key in acc) {
            return (acc as TranslationJson)[key]
        }
        return undefined
    }, obj as unknown) as TranslationValue | undefined
}

export default function useTranslate(json: {
    [lang: string]: TranslationJson
}) {
    const locale = useLanguageStore((state) => state.locale)

    return (key: string): string => {
        const current = resolveNestedKey(json[locale], key)
        const fallback = resolveNestedKey(json['en'], key)

        const value = current ?? fallback

        if (typeof value === 'string') return value
        if (Array.isArray(value)) return value.join(', ')
        return `missing:${key}`
    }
}
