import { defaultLang, languages, ui, type Language, type TranslationKey } from "./ui";

export function getLangFromUrl(url: URL): Language {
	const [, lang] = url.pathname.split("/");
	if (lang in ui) return lang as Language;
	return defaultLang;
}

export function getKeylang(key: TranslationKey) {
	return function useTranslation(lang: Language) {
		return ui[lang][key] || ui[defaultLang][key];
	};
}

export function useTranslation<L extends Language = Language>(lang: L = defaultLang as L) {
	return function t<K extends TranslationKey>(
		key: K
	): (typeof ui)[L][K] | (typeof ui)[Language][K] | K {
		return ui[lang][key] || ui[defaultLang][key] || key;
	};
}

export function getLocalizedPath(pathname: string, lang: string) {
	const cleanPath = pathname.replace(/^\/|\/$/g, "");
	const pathSegments = cleanPath ? cleanPath.split("/") : [];
	const currentLang = pathSegments[0];
	const hasLangPrefix = Object.keys(languages).includes(currentLang);

	if (hasLangPrefix) {
		pathSegments[0] = lang;
	} else {
		pathSegments.unshift(lang);
	}

	return `/${pathSegments.join("/")}`;
}
