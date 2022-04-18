# Backend headless
Le dépôt propose une organisation en mode CMS basique pour la réalisation de blogs et sites Internet simples. Il comprend des catégories, articles et menus ainsi que quelques composants initiaux (liens, carrousel).

## Déploiement heroku
Pour Heroku nous avons appliqué le tutoriel fourni par Strapi pour ajouter une base de données Postgre. Le déploiement du back nécessite de réaliser quelques étapes :
1 - database.js : ajouter un document database.js dans config/env/production/ ;
2 - créer une branche au nom du projet, opérer les modifications éventuelles sur cette branche. La pusher et la relier à un projet sur Heroku ;
3 - dans le projet Heroku, onglet Resources, ajouter le composant Heroku Postgres (gratuit) ;
4 - Settings > Config Vars, Reveal Config Vars, vérifier qu'il y a bien DATABASE_URL, ajouter APP_KEYS avec une valeur quelconque. La première variable sera traitée pour obtenir le mot de passe, l'adresse (etc) pour l'accès à la base de données, la seconde palie au manque du fichier .env dans le dossier du projet.

# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project. Find the one that suits you on the [deployment section of the documentation](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html).

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://docs.strapi.io) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
