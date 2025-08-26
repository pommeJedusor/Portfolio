export type Locale = "en"|"fr";
export const text = {
  "en": {
    "Homepage": {
      "title": "Hello!"
    },
    "Navbar": {
      "short": {
        "about": "About Me",
        "projects": "My Projects",
        "skills": "My Skills",
        "contact": "Contact Me",
      },
      "long": {
        "about": "About",
        "projects": "Projects",
        "skills": "Skills",
        "contact": "Contact",
      }
    },
    "ProjectsPage": {
      "title": "My projects",
      "code-site-link-text": ", the code of the site can be found there",
      "code-api-link-text": ", the code of the api can be found there",
      "Projects": [
        {
          "name": "Chesspomme",
          "description": "it's the first website I deployed and as its name shows it's a chess website, for the techs, it uses nodejs (without any framework like express) and bare html and css for the front (and ejs for the templating), for the db I used mysql which I stop using for futur projects as it's pretty heavy on the server (more so because docker is used), I had to implement some important functionalitties like to check that a move is valid server side, allow players to come back to a unfinished game wether they were connected or not, an elo system and I also installed and connected stockfish on the server to allow players to play againt it",
          "link-project": "https://chesspomme.com",
          "github-site-link": "https://github.com/pommeJedusor/chess_pomme",
          "github-api-link": "",
        },
        {
          "name": "Magical Square",
          "description": "This site is based on a problem of a 10x10 grid (if you want to understand it better I recommand going in the rules section of the site) I actually solved the problem once before even knowing how to code, is later on that I tried to solve it with code and it needed multiple attempts as the problem was actually hard to solve with code but I eventually did, more than that, I found not less than 33 938 944 solutions (you can find all of them on my site) and to find all of them my computer takes around a 1/3 of a second. I first tried to store all the solutions in text then in a sqlite database but it took close to 20GB which is a lot so I had to came up with a ingenious solution which was to store the whole thing as a graph, each node was a position represented by a hash which was a bitmap of the 100 squares and the index of the position of the last number and the links between the node were the possibles moves so the first node is the starting position and it is connected to three nodes which represent the grid after those moves, each node also contains the number of paths towards the solution from that node to be able to easily get the state of the grid for a given solution number that solution made the usage of memory really lightweight, made the calcul faster as I don't have to calcul multiple equivalent nodes",
          "link-project": "https://magical-square.chesspomme.com/en",
          "github-site-link": "https://github.com/pommeJedusor/magical_square_site",
          "github-api-link": "https://github.com/pommeJedusor/magical_square_api",
        },
        {
          "name": "Wordle Solver",
          "description": "I'm not gonna describe this one here as I wrote an extensive one on the site itself (in the Details section)",
          "link-project": "https://wordle-solver.chesspomme.com/",
          "github-site-link": "https://github.com/pommeJedusor/wordle_solver_site",
          "github-api-link": "https://github.com/pommeJedusor/wordle_solver_api",
        },
      ]
    }
  },
  "fr": {
    "Homepage": {
      "title": "Salout!"
    },
    "Navbar": {
      "short": {
        "about": "À Propos De Moi",
        "projects": "Mes Projets",
        "skills": "Mes Compétences",
        "contact": "Me Contacter",
      },
      "long": {
        "about": "À Propos",
        "projects": "Projets",
        "skills": "Skills",
        "contact": "Contact",
      }
    },
    "ProjectsPage": {
      "title": "Mes projets",
      "code-site-link-text": ", le code du site",
      "code-api-link-text": ", le code de l'api",
      "Projects": [
        {
          "name": "Chesspomme",
          "description": "C'est le premier site que j'ai déployé, et comme son nom l'indique c'est un site d'échecs, pour le backend j'ai utilisé nodejs sans aucun framework comme express mais avec ejs pour le templating et mysql, pour le front c'est du pur html/css/js, j'ai implémenté certaines fonctionnalitées telles que la vérification coté serveur de la validité des coups/timer, permettre au joueurs de revenir dans une partie en cours s'il quittent la page (qu'ils soient connectés ou non), un système elo, ainsi que la possibilité d'affronter stockfish que j'ai installé sur mon serveur",
          "link-project": "https://chesspomme.com",
          "github-site-link": "https://github.com/pommeJedusor/chess_pomme",
          "github-api-link": "",
        },
        {
          "name": "Carré Magique",
          "description": "Ce site est basé sur un problème d'une grille de 10x10 (si vous voulez mieux le comprendre, je vous recommande d'aller dans la section des règles du site). J'ai en fait résolu le problème une fois avant même de savoir coder. C'est plus tard que j'ai essayé de le résoudre avec du code, et cela a nécessité plusieurs tentatives car le problème était en réalité difficile à résoudre par code, mais j'y suis finalement parvenu. De plus, j'ai trouvé pas moins de 33 938 944 solutions (vous pouvez toutes les trouver sur mon site), et pour les toutes trouver, mon ordinateur met environ un tiers de seconde. J'ai d'abord essayé de stocker toutes les solutions dans un fichier texte, puis dans une base de données SQLite, mais cela prenait près de 20 Go, ce qui est beaucoup. J'ai donc dû trouver une solution ingénieuse, qui consistait à stocker le tout sous forme de graphe. Chaque nœud représentait une position, représentée par un hash qui était un bitmap des 100 cases et de l'index de la position du dernier nombre. Les liens entre les nœuds représentent les mouvements possibles, donc le premier nœud est la position de départ et il est connecté à trois nœuds qui représentent la grille après ces mouvements. Chaque nœud contient également le nombre de chemins vers la solution depuis ce nœud afin de pouvoir obtenir facilement l'état de la grille pour un numéro de solution donné. Cette solution a rendu l'utilisation de la mémoire vraiment légère et a accéléré le calcul, car je n'ai pas à calculer plusieurs nœuds équivalents.",
          "link-project": "https://magical-square.chesspomme.com/fr",
          "github-site-link": "https://github.com/pommeJedusor/magical_square_site",
          "github-api-link": "https://github.com/pommeJedusor/magical_square_api",
        },
        {
          "name": "Wordle Solver",
          "description": "Je ne vais pas décrire ici celui-ci étant donné que je l'ai déjà fait sur le site lui-même (dans la section Details)",
          "link-project": "https://wordle-solver.chesspomme.com/",
          "github-site-link": "https://github.com/pommeJedusor/wordle_solver_site",
          "github-api-link": "https://github.com/pommeJedusor/wordle_solver_api",
        },
      ]
    }
  }
}
