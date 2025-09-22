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
      "title": "My Projects",
      "Projects": [
        {
          "name": "Chesspomme",
          "description": "It's the first website I deployed, and as its name shows, it's a chess website. For the techs, it uses Node.js (without any framework like Express) and bare HTML and CSS for the front (and EJS for the templating). For the DB, I used MySQL, which I stopped using for future projects as it's pretty heavy on the server (more so because Docker is used). I had to implement some important functionalities like to check that a move is valid server-side, allow players to come back to an unfinished game whether they were connected or not, an Elo system, and I also installed and connected Stockfish on the server to allow players to play against it.",
          "link-project": "https://chesspomme.com",
          "github-links": [
            {
              "text": "the code of the site can be found there",
              "link": "https://github.com/pommeJedusor/chess_pomme",
            },
          ],
        },
        {
          "name": "Magical Square",
          "description": "This site is based on a problem of a 10x10 grid (if you want to understand it better, I recommend going in the rules section of the site). I actually solved the problem once before even knowing how to code. It was later on that I tried to solve it with code, and it needed multiple attempts as the problem was actually hard to solve with code, but I eventually did. More than that, I found not less than 33 938 944 solutions (you can find all of them on my site), and to find all of them, my computer takes around 1/3 of a second. I first tried to store all the solutions in text, then in a SQLite database, but it took close to 20GB, which is a lot, so I had to come up with an ingenious solution, which was to store the whole thing as a graph. Each node was a position represented by a hash, which was a bitmap of the 100 squares and the index of the position of the last number, and the links between the nodes were the possible moves. So the first node is the starting position, and it is connected to three nodes which represent the grid after those moves. Each node also contains the number of paths towards the solution from that node to be able to easily get the state of the grid for a given solution number. That solution made the usage of memory really lightweight and made the calculation faster as I don't have to calculate multiple equivalent nodes.",
          "link-project": "https://magical-square.chesspomme.com/en",
          "github-links": [
            {
              "text": "the code of the site can be found there",
              "link": "https://github.com/pommeJedusor/magical_square_site",
            },
            {
              "text": "the code of the api can be found there",
              "link": "https://github.com/pommeJedusor/magical_square_api",
            },
          ],
        },
        {
          "name": "Wordle Solver",
          "description": "I'm not going to describe this one here, as I wrote an extensive one on the site itself (in the Details section).",
          "link-project": "https://wordle-solver.chesspomme.com/",
          "github-links": [
            {
              "text": "the code of the site can be found there",
              "link": "https://github.com/pommeJedusor/wordle_solver_site",
            },
            {
              "text": "the code of the api can be found there",
              "link": "https://github.com/pommeJedusor/wordle_solver_api",
            },
          ],
        },
        {
          "name": "Discord Bots",
          "description": "I have developed several Discord bots, the most important of which was for a community server on Minecraft. The bot was designed to implement a gem reward system for certain actions and allow, in exchange for these gems, draws that could yield items or characters with different probabilities for each, including a pity system heavily inspired by that of Genshin Impact. I also coded a Discord bot that, through scraping, informs whenever a paid game is temporarily free on Epic Games by displaying: the name (clickable to go directly to its page), the image, and a short description if available.",
          "link-project": "https://top.gg/bot/1317513322051932270",
          "github-links": [
            {
              "text": "the code of the Minecraft community server bot",
              "link": "https://github.com/pommeJedusor/Sat-s-discord-bot",
            },
            {
              "text": "the code of the Epic Games bot",
              "link": "https://github.com/pommeJedusor/pomme_discord_bot",
            },
          ],
        },
        {
          "name": "deployment",
          "description": "I have a VPS that I use for all of my deployments. I use GitHub workflows to automate Docker image builds and deployments on Docker Hub. I use cron to automate the deployment of programs on the VPS, the backups, and domain renewals with Certbot.",
          "link-project": "",
          "github-links": [
          ],
        },
      ]
    },
    "About": {
      "title": "Who Am I",
      "content": "I am a belgian nerd (I use Neovim and Arch, by the way) who loves to learn how things work and to play with them (and more often than not, break them). I have a good knowledge of front-end, back-end, Linux, Networks, and servers because of my personal and professional experiences, though I perform better and prefer tasks that have a higher level of complexity. I'm also deeply interested in philosophy (particularly meta-ethics and ethics) and recently got obsessed again over memorisation techniques",
    },
    "Contact": {
      "title": "Contact Me",
      "content": "If you want to contact me, you can just send me an email at gregory.lemonnier@chesspomme.com",
    },
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
      "title": "Mes Projets",
      "Projects": [
        {
          "name": "Chesspomme",
          "description": "C'est le premier site que j'ai déployé, et comme son nom l'indique, c'est un site d'échecs. Pour le backend, j'ai utilisé Node.js sans aucun framework comme Express, mais avec EJS pour le templating et MySQL. Pour le front, c'est du pur HTML/CSS/JS. J'ai implémenté certaines fonctionnalités telles que la vérification côté serveur de la validité des coups/timer, permettre aux joueurs de revenir dans une partie en cours s'ils quittent la page (qu'ils soient connectés ou non), un système Elo, ainsi que la possibilité d'affronter Stockfish que j'ai installé sur mon serveur.",
          "link-project": "https://chesspomme.com",
          "github-links": [
            {
              "text": "le code du site",
              "link": "https://github.com/pommeJedusor/chess_pomme",
            },
          ],
        },
        {
          "name": "Carré Magique",
          "description": "Ce site est basé sur un problème d'une grille de 10x10 (si vous voulez mieux le comprendre, je vous recommande d'aller dans la section des règles du site). J'ai en fait résolu le problème une fois avant même de savoir coder. C'est plus tard que j'ai essayé de le résoudre avec du code, et cela a nécessité plusieurs tentatives, car le problème était en réalité difficile à résoudre par code, mais j'y suis finalement parvenu. De plus, j'ai trouvé pas moins de 33 938 944 solutions (vous pouvez toutes les trouver sur mon site), et pour les toutes trouver, mon ordinateur met environ un tiers de seconde. J'ai d'abord essayé de stocker toutes les solutions dans un fichier texte, puis dans une base de données SQLite, mais cela prenait près de 20 Go, ce qui est beaucoup. J'ai donc dû trouver une solution ingénieuse, qui consistait à stocker le tout sous forme de graphe. Chaque nœud représentait une position, représentée par un hash qui était un bitmap des 100 cases et de l'index de la position du dernier nombre. Les liens entre les nœuds représentent les mouvements possibles, donc le premier nœud est la position de départ et il est connecté à trois nœuds qui représentent la grille après ces mouvements. Chaque nœud contient également le nombre de chemins vers la solution depuis ce nœud afin de pouvoir obtenir facilement l'état de la grille pour un numéro de solution donné. Cette solution a rendu l'utilisation de la mémoire vraiment légère et a accéléré le calcul, car je n'ai pas à calculer plusieurs nœuds équivalents.",
          "link-project": "https://magical-square.chesspomme.com/fr",
          "github-links": [
            {
              "text": "le code du site",
              "link": "https://github.com/pommeJedusor/magical_square_site",
            },
            {
              "text": "le code de l'api",
              "link": "https://github.com/pommeJedusor/magical_square_api",
            },
          ],
        },
        {
          "name": "Wordle Solver",
          "description": "Je ne vais pas décrire ici celui-ci, étant donné que je l'ai déjà fait sur le site lui-même (dans la section Détails).",
          "link-project": "https://wordle-solver.chesspomme.com/",
          "github-links": [
            {
              "text": "le code du site",
              "link": "https://github.com/pommeJedusor/wordle_solver_site",
            },
            {
              "text": "le code de l'api",
              "link": "https://github.com/pommeJedusor/wordle_solver_api",
            },
          ],
        },
        {
          "name": "Bots Discord",
          "description": "J'ai développé plusieurs bots Discord, le plus important d'entre eux étant à destination d'un serveur communautaire Minecraft. Le bot devait implémenter un système de récompense en gemmes pour certaines actions et permettre, en échange de ces gemmes, de faire des tirages qui pouvaient donner des objets ou des personnages avec des probabilités différentes pour chacun, incluant de plus un système de pity fortement inspiré par celui de Genshin Impact. J'ai également codé un bot Discord qui, via du scraping, informe dès qu'un jeu payant est temporairement gratuit sur Epic Games en affichant : le nom (cliquable pour arriver directement sur sa page), l'image, et une courte description si elle existe.",
          "link-project": "https://top.gg/bot/1317513322051932270",
          "github-links": [
            {
              "text": "le code du bot pour le serveur communautaire Minecraft",
              "link": "https://github.com/pommeJedusor/Sat-s-discord-bot",
            },
            {
              "text": "le code du bot Epic Games",
              "link": "https://github.com/pommeJedusor/pomme_discord_bot",
            },
          ],
        },
        {
          "name": "Déploiements",
          "description": "J'ai un VPS que j'utilise pour tous mes déploiements. J'utilise les workflows GitHub pour automatiser le build et déploiement d'images sur le Docker Hub. J'utilise Cron pour automatiser le déploiement de programmes sur le VPS, ainsi que pour les backups et pour le renouvellement de domaines via Certbot.",
          "github-links": [
          ],
        },
      ]
    },
    "About": {
      "title": "Qui Suis-Je?",
      "content": "Je suis un nerd belge (j'utilise Neovim et Arch, btw) qui aime apprendre comment les choses fonctionnent et jouer avec elles (et les casser plus souvent que j'aimerais). J'ai une bonne connaissance du front-end, du back-end, de Linux, de réseaux et des serveurs, de par mes expériences personnelles et professionnelles, bien que je sois plus performant et que je préfère les tâches qui présentent un niveau de complexité plus élevé. Je m'intéresse aussi beaucoup à la philosophie (particulièrement méta-éthique/éthique) et je suis récemment redevenu obsédé par les techniques de mémorisation.",
    },
    "Contact": {
      "title": "Me Contacter",
      "content": "Si vous souhaitez me contacter, vous pouvez simplement m'envoyer un email à gregory.lemonnier@chesspomme.com",
    },
  }
}
