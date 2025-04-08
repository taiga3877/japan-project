import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import uzTranslation from './uz.json';
import enTranslation from './en.json';
import ruTranslation from './ru.json';
import jpnTranslation from './jpn.json'

const language = localStorage.getItem('') || 'ru'

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'uz',
        lng: 'en',
        debug: true,
        resources: {
            uz: { translation: uzTranslation },
            en: { translation: enTranslation },
            ru: { translation: ruTranslation },
            jpn: { translation: jpnTranslation },
        },
    });

export default i18n;
