import { DictionaryInterface } from "@/interfaces/i18n";

// Define the dictionaries object
const dictionaries: { [key: string]: () => Promise<any> } = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  pt: () => import('../dictionaries/pt.json').then((module) => module.default),
};

// Function to get the dictionary based on the locale
export const getDictionary = async (locale: string): Promise<DictionaryInterface> => {
  if (dictionaries[locale]) {
    return dictionaries[locale]();
  } else {
    throw new Error(`Dictionary for locale "${locale}" not found`);
  }
};