import { Locale, text } from "@/languages_text/text";

export default async function NavBar({locale}: {locale: Locale}) {
  return (
    <div className="text-center text-lg border grid grid-cols-4">
      <a className="cursor-pointer border hidden md:block">{text[locale]["Navbar"]["short"]["about"]}</a>
      <a className="cursor-pointer border md:hidden">{text[locale]["Navbar"]["long"]["about"]}</a>
      <a className="cursor-pointer border hidden md:block">{text[locale]["Navbar"]["short"]["projects"]}</a>
      <a className="cursor-pointer border md:hidden">{text[locale]["Navbar"]["long"]["projects"]}</a>
      <a className="cursor-pointer border hidden md:block">{text[locale]["Navbar"]["short"]["skills"]}</a>
      <a className="cursor-pointer border md:hidden">{text[locale]["Navbar"]["long"]["skills"]}</a>
      <a className="cursor-pointer border hidden md:block">{text[locale]["Navbar"]["short"]["contact"]}</a>
      <a className="cursor-pointer border md:hidden">{text[locale]["Navbar"]["long"]["contact"]}</a>
    </div>
  );
}
