## Getting started
*Note: This starter project is running the latest version of Gatsby V2 which is still in Beta*
1. Install the `gatsby-cli` package globally.
```bash
npm install --global gatsby-cli
```
2. Create a new gatsby project using this starter project.
```bash
gatsby new new-blog https://github.com/kylegalbraith/gatsby-starter-tailwind-seo-social
```
3. Open `src/config/config.js` and fill in your information
```javascript
module.exports = {
    siteTitle: "This is the official blog from Daniel Uhlmann",
    shortSiteTitle: "A blog about technology, development and my own thoughts",
    siteDescription: "Welcome to my own personal blog. I want to share my insights about some decent technologies. I like to introduce myself if you are here for your first time. So my name is Daniel and I'am 20 years old. I work as a System Engineer with a weakness for programming. So I have the perfect requirements for DevOps. And this is what I'am also very interested about. So just read along and follow my blog and be a awesome part of my journey!",
    siteUrl: "https://blog.uhlmanndaniel.com",
    pathPrefix: "",
    siteImage: "images/facebook-cover.jpg",
    siteLanguage: "en",
    authorName: "Daniel Uhlmann",
    authorTwitterAccount: "xFuturecs",
    authorSocialLinks: [
      { name: "github", url: "https://github.com/xFuture603" },
      { name: "twitter", url: "https://twitter.com/xFuturecs" },
      { name: "facebook", url: "http://facebook.com/daniel.uhlmann" }
    ]
  };
```
4. Build Tailwind stylesheet and start local Gatsby development server.
```bash
cd new-blog
npm run build:css & gatsby develop
```
5. Open local development server at `localhost:8000` and you should see the following sample.

