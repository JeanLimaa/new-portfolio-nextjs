import { Skills } from '@/components/Skills/Skills';
import { HomeSection } from '@/components/Home';
import { Portfolio } from '@/components/Portfolio/Portfolio';
import { AboutComponent } from '@/components/About/About';
import { getDictionary } from '@/functions/dictionary';
import { DictionaryInterface } from '@/interfaces/i18n.interface';
import { Header } from '@/components/Header/Header';
import { Locale } from '@/i18n-config';

interface PortfolioPageProps {
  lang: Locale;
  hideContacts: boolean;
}

export async function PortfolioPage({ lang, hideContacts }: PortfolioPageProps) {
  const dictionary: DictionaryInterface = await getDictionary(lang);

  return (
    <>
      <Header dictionary={dictionary.header} />
      <main>
        <HomeSection dictionary={dictionary.home} hideContactsInfo={hideContacts} />
        <AboutComponent dictionary={dictionary.about} />
        <Skills dictionary={dictionary.skills} />
        <Portfolio dictionary={dictionary.portfolio} lang={lang} />
      </main>
    </>
  );
}