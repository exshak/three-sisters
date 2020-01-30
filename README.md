<p align="center">
  <a href="https://threesisterss.com">
    <img src="./src/assets/icons/logo-full.svg" alt="Three Sisters" width="400" />
  </a>
</p>

<p align="center">
  <a href="https://github.com/exshak/three-sisters">
    <img src="https://img.shields.io/badge/build-passing-success.svg" alt="build: status"/>
  </a>
  <a href="https://emotion.sh">
    <img src="https://img.shields.io/badge/style-%F0%9F%92%85%20emotion-orange.svg?colorB=daa357&colorA=db748e" alt="style: emotion"/>
  </a>
  <a href="https://netlifycms.org">
    <img src="https://img.shields.io/badge/cms-netlify--cms-00bbcc.svg" alt="cms: netlify"/>
  </a>
  <a href="https://uploadcare.com">
    <img src="https://img.shields.io/badge/cdn-uploadcare-00cc99.svg" alt="cdn: uploadcare"/>
  </a>
  <a href="https://app.netlify.com/sites/threesisters/deploys">
    <img src="https://api.netlify.com/api/v1/badges/e7199e76-4199-4f5a-90bd-b12c5693bd5f/deploy-status" alt="netlify: status"/>
  </a>
</p>

---

Three Sisters is an online store for handcrafted art and calligraphy, built with Gatsby and Netlify's CMS API using JWT authentication for the Admin interface (UI). It can be configured extensibly with real-time previews and seamless images using Uploadcare's CDN API. The store can search by products and sort by categories with dynamic content loading and page navigation.

_Have a great idea to contribute? Make a pull request, I'm always looking for ways to improve [Three Sisters](https://threesisterss.com)._

## Features

- Carousel & Gallery
- Forms with reCAPTCHA
- Google Analytics Tracking
- Product Search & Collection Sort
- Instagram Feed Integration
- Mailchimp Integration
- Uploadcare CDN API
- Netlify CD, CMS
- PWA
- SEO

## Quick Start

Clone repository, install dependencies, start server

```sh
git clone https://github.com/exshak/three-sisters.git
cd three-sisters
yarn                   # npm install
yarn start             # npm start
# to deploy
yarn build             # npm build
```

Visit site at _`localhost:8000`_

## Built With

- [React](https://reactjs.org)
- [Gatsby](https://gatsbyjs.org)
- [Emotion](https://emotion.sh)
- [React Slick](https://react-slick.neostack.com)
- [Netlify CMS](https://netlifycms.org)
- [Uploadcare](https://uploadcare.com)
- [Netlify](https://netlify.com)

#### Folder Structure

```sh
.
├── config            # SEO manifest
├── content           # CMS collections
├── src
│   ├── assets        # Icons and images
│   ├── cms           # CustomCMS preview
│   ├── components    # Javascript and css
│   ├── pages         # 404 page and routes
│   └── templates     # Site pages templates
└── static            # Netlifys CMS settings
```

## License

[MIT](./LICENSE)
