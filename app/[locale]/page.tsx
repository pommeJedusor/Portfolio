import { text } from "@/languages_text/text";
import { generateStaticParams } from "@/utils/generateStaticParams";


export default async function Home({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params as {locale: "en"|"fr"};
  return (
    <div>
      <h1>{ text[locale]["Homepage"]["title"] }</h1>
    </div>
  );
}

export { generateStaticParams }
