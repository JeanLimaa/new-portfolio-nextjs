
import { cookies } from 'next/headers';
import { i18n } from '@/i18n-config';

export const getLanguage = async () => {
    const cookieStore = cookies();
    const language = cookieStore.get("language")?.value; 
    //const language = "pt"
    const defaultLanguage = i18n.defaultLocale;
    console.log(language, "cookies")
    return language || defaultLanguage;
};
