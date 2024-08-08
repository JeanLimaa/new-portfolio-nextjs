import { Skills } from '@/components/Skills/Skills';
import { HomeSection } from '@/components/Home';
import { Portfolio } from '@/components/Portfolio/Portfolio';
import { AboutComponent } from '@/components/About/About';
import { getDictionary } from '@/functions/dictionary';
import { DictionaryInterface } from '@/interfaces/i18n';
import { Header } from '@/components/Header/Header';
import { Locale } from '@/i18n-config';

interface Props {
  params: {lang: Locale}
}

export default async function Home({params}: Props) {
  const dictionary: DictionaryInterface = await getDictionary(params.lang);

  return (
    <>
      <Header dictionary={dictionary.header} />
      <main>
        <HomeSection dictionary={dictionary.home}/>
        <AboutComponent dictionary={dictionary.about}/>
        <Skills dictionary={dictionary.skills}/>
        <Portfolio dictionary={dictionary.portfolio} lang={params.lang} />
      </main>
    </>
  )
}
