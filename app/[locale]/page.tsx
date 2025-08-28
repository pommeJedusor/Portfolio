import NavBar from "@/components/NavBar";
import { Locale, text } from "@/languages_text/text";
import { generateStaticParams } from "@/utils/generateStaticParams";


export default async function Home({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const projects = [];
  for (let i=0;i<text[locale]["ProjectsPage"]["Projects"].length;i++){
    projects.push(
      <div key={i} className="w-3/4 m-4">
        <h3 className="text-2xl text-left mb-1 text-red-700">
          <a className="hover:text-red-900" href={text[locale]["ProjectsPage"]["Projects"][i]["link-project"]}>
            {text[locale]["ProjectsPage"]["Projects"][i]["name"]}
          </a>
        </h3>
        <p className="text-lg">
          {text[locale]["ProjectsPage"]["Projects"][i]["description"]}
          {/* put github links if there are */}
          {text[locale]["ProjectsPage"]["Projects"][i]["github-site-link"] ?
            (<a href={text[locale]["ProjectsPage"]["Projects"][i]["github-site-link"]}className="text-red-700 hover:text-red-900">{text[locale]["ProjectsPage"]["code-site-link-text"]}</a>) :
            (<></>)
          }
          {text[locale]["ProjectsPage"]["Projects"][i]["github-api-link"] ?
            (<a href={text[locale]["ProjectsPage"]["Projects"][i]["github-api-link"]}className="text-red-700 hover:text-red-900">{text[locale]["ProjectsPage"]["code-api-link-text"]}</a>) :
            (<></>)
          }
        </p>
      </div>
    )
  }

  return (
    <div>
      <NavBar locale={locale}/>
      {/* projects */}
      <div className="flex flex-col items-center">
        <h2 className="text-3xl text-center mt-20">{text[locale]["ProjectsPage"]["title"]}</h2>
        {projects}
      </div>
      <div className="flex flex-col items-center">
        <div className="w-3/4 m-4">
          <h2 className="text-3xl text-center mt-20">{text[locale]["About"]["title"]}</h2>
          <p className="text-lg">
            {text[locale]["About"]["content"]}
          </p>
        </div>
      </div>
    </div>
  );
}

export { generateStaticParams }
