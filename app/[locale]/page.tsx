import NavBar from "@/components/NavBar";
import { Locale, text } from "@/languages_text/text";
import { generateStaticParams } from "@/utils/generateStaticParams";


export default async function Home({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const projects = [];
  for (let i=0;i<text[locale]["ProjectsPage"]["Projects"].length;i++){
    const links = [];
    for (let j=0;j<text[locale]["ProjectsPage"]["Projects"][i]["github-links"].length;j++){
      links.push(
        <a key={j} href={text[locale]["ProjectsPage"]["Projects"][i]["github-links"][j]["link"]} className="text-red-700 hover:text-red-900">
          {j==0 ? ' ' : ', '}{text[locale]["ProjectsPage"]["Projects"][i]["github-links"][j]["text"]}
        </a>
      );
    }

    projects.push(
      <div key={i} className="w-3/4 m-4">
        <h3 className="text-2xl text-left mb-1 text-red-700">
          <a className="hover:text-red-900" href={text[locale]["ProjectsPage"]["Projects"][i]["link-project"]}>
            {text[locale]["ProjectsPage"]["Projects"][i]["name"]}
          </a>
        </h3>
        <p className="text-lg">
          {text[locale]["ProjectsPage"]["Projects"][i]["description"]}
          {links}
        </p>
      </div>
    )
  }

  return (
    <div>
      <NavBar locale={locale}/>
      <a className="mt-3 block w-full text-lg text-center text-red-700 hover:text-red-900" href={text[locale]["other-language-link"]}>{text[locale]["other-language-link-text"]}</a>
      {/* projects */}
      <div id="Projects" className="flex flex-col items-center">
        <h2 className="text-3xl text-center mt-20">{text[locale]["ProjectsPage"]["title"]}</h2>
        {projects}
      </div>
      {/* about */}
      <div id="About" className="flex flex-col items-center">
        <div className="w-3/4 m-4">
          <h2 className="text-3xl text-center mt-20 mb-6">{text[locale]["About"]["title"]}</h2>
          <p className="text-lg">
            {text[locale]["About"]["content"]}
          </p>
        </div>
      </div>
      {/* contact me */}
      <div id="Contact" className="flex flex-col items-center">
        <h2 className="text-3xl text-center mt-20 mb-6">{text[locale]["Contact"]["title"]}</h2>
        <p>{text[locale]["Contact"]["content"]}</p>
      </div>
    </div>
  );
}

export { generateStaticParams }
