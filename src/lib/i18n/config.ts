export const defaultLanguage = 'en' as const;

export const languages = ['en', 'ja', 'es'] as const;

export type Language = (typeof languages)[number];

export const languageLabels: Record<Language, string> = {
	en: 'EN',
	ja: '日本語',
	es: 'ES'
};