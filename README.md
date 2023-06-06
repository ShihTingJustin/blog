# sthdev.app

My blog with technical notes, articles and portfolio, [try it now](https://www.sthdev.app/).
This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator, and deployed by [Netlify](https://www.netlify.com/).

<img width="2560" alt="blog-preview" src="https://user-images.githubusercontent.com/56827791/198873301-67ee7654-22e9-44e4-9a0f-c0596853a5d5.png">

### Config
|  path   | content  |
|  ----  | ----  |
| docusaurus.config.js | `siteUrl`, `siteTitle`, `siteDescription`, `navbar` |
| src/components/HomepageFeatures/index.js | home page UI |




### Tech Stack
* TypeScript
* React
* Docusaurus
* Algolia search
* SCSS


### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
