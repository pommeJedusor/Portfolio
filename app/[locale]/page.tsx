import NavBar from "@/components/NavBar";
import { Locale, text } from "@/languages_text/text";
import { generateStaticParams } from "@/utils/generateStaticParams";


export default async function Home({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  return (
    <div>
      <NavBar locale={locale}/>
      {/* projects */}
      <div className="flex flex-col items-center">
        <h2 className="text-3xl text-center mt-20">My projects</h2>
        <h3 className="text-2xl text-left w-3/4 m-2 text-red-700 hover:text-red-900"><a href="https://chesspomme.com">Chesspomme</a></h3>
        <p className="w-3/4 text-lg">it's the first website I deployed and as its name shows it's a chess website, for the techs, it uses nodejs (without any framework like express)
        and bare html and css for the front (and ejs for the templating), for the db I used mysql which I stop using for futur projects
        as it's pretty heavy on the server (more so because docker is used), I had to implement some important functionalitties
        like to check that a move is valid server side, allow players to come back to a unfinished game wether
        they were connected or not, an elo system and I also installed and connected stockfish on the server to allow players 
        to play againt it, the code can be found
        <a href="https://github.com/pommeJedusor/chess_pomme" className="text-red-700 hover:text-red-900"> there</a>
        </p>
      </div>
    </div>
  );
}

export { generateStaticParams }
