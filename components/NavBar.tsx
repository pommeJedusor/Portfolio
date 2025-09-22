import { Locale, text } from "@/languages_text/text";

export default async function NavBar({locale}: {locale: Locale}) {
  return (
    <div className="text-center text-lg grid grid-cols-3">
      <a href="#Projects" className="cursor-pointer border hidden md:block">{text[locale]["Navbar"]["short"]["projects"]}</a>
      <a href="#Projects" className="cursor-pointer border md:hidden">{text[locale]["Navbar"]["long"]["projects"]}</a>
      <a href="#About" className="cursor-pointer border hidden md:block">{text[locale]["Navbar"]["short"]["about"]}</a>
      <a href="#About" className="cursor-pointer border md:hidden">{text[locale]["Navbar"]["long"]["about"]}</a>
      <a href="#Contact" className="cursor-pointer border hidden md:block">{text[locale]["Navbar"]["short"]["contact"]}</a>
      <a href="#Contact" className="cursor-pointer border md:hidden">{text[locale]["Navbar"]["long"]["contact"]}</a>
    </div>
  );
}
