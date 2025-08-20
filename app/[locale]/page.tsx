import NavBar from "@/components/NavBar";
import { Locale, text } from "@/languages_text/text";
import { generateStaticParams } from "@/utils/generateStaticParams";


export default async function Home({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  return (
    <div>
      <NavBar locale={locale}/>
      <h1>{ text[locale]["Homepage"]["title"] }</h1>
    </div>
  );
}

export { generateStaticParams }
