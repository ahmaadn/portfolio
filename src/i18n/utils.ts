import { defaultLang, ui, type TranslationKey } from "./ui";


export function getLangFromUrl(url: URL) {
	const [, lang] = url.pathname.split('/');
	if (lang in ui) return lang as keyof typeof ui;
	return defaultLang;
}


export function getKeylang(key: TranslationKey) {
	return function useTranslation(lang: keyof typeof ui) {
		return ui[lang][key] || ui[defaultLang][key];
	}
}

export function useTranslation<L extends keyof typeof ui = keyof typeof ui>(lang: L = defaultLang as L) {
	return function t<K extends TranslationKey>(key: K): (typeof ui)[L][K] | (typeof ui)[keyof typeof ui][K] | K {
		return ui[lang][key] || ui[defaultLang][key] || key
	}
}


