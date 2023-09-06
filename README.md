A React.js SaaS Landing Page template using Next.js & Chakra.js

## Getting Started

1. Pull the Github repository locally:

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

4. Configure your website name, domain & other details at the `/content/config.json` file

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Deploy on Netlify

Another alternative is Netlify app which is completely free.

Check out the [Netlify deployement guide for Next.js app](https://www.netlify.com/blog/2020/11/30/how-to-deploy-next.js-sites-to-netlify/) for more details

## Frequently Asked Questions

Some common questions you might have about the template and how to use it:

### How to create new pages with Next.js?

Check out the official [Next.js pages documentation](https://nextjs.org/docs/basic-features/pages)

### How can I style the template?

The Odin template uses Chakra UI for styling which is a CSS-in-JS solution. Learn more about Chakra UI on their [official documentation website](https://chakra-ui.com/docs/getting-started)

###How to customize the theme (colors, fonts, etc)?

Chakra UI offers an easy solution to theme customization. Check out how to [edit your theme color](https://chakra-ui.com/docs/theming/customize-theme#customizing-theme-tokens) and [how to add your custom font](https://chakra-ui.com/guides/using-fonts).

### How to edit the content (text + images)?

All the landing page content is available in the `/content` folder. Each file is responsible for a page.

For example, the `hero.json` includes the content about the landing page hero section. By changing, all your edits affect the landing page immediately.

###How to add images to the template?

There are two ways to add your images:

1. Host your images on a 3rd party storage provide like **Amazon S3** or **Google Storage Cloud**.

   ```html
   <img src="[public-image-url]" />
   ```

2. Add your images on your repository under the folder `/public/static`. Then you can access them in your code like that:

   ```html
   <img src="/public/static/[image-name-here]" />
   ```

###How to add a new article?

You can add new articles by creating an `.mdx` file in the folder `/pages/blog`. [MDX](https://mdxjs.com/) files are like common markdown files, but they also allow you to write JSX in them.

You need write it with markdown syntax and inlcude these metadata to make it work properly:

| Name        | Reason                                                                                                   |
| ----------- | -------------------------------------------------------------------------------------------------------- |
| title       | The article title                                                                                        |
| summary     | A short description for your article. Visible on the `/blog` page                                        |
| publishedAt | The publishing date for the article                                                                      |
| cover       | Cover image for the individual article page and the `/blog` page                                         |
| ogImage     | The open graph image that will be visible on social media shares                                         |
| tags        | The article categories to quickly identify its content                                                   |
| isPublished | When it's true the article is publicly available on the `/blog` page. Otherwise you can only preview it. |

## Learn More about dependencies

To learn more about Next.js & Chakra UI, take a look at the following resources:

- [Build A Landing Page With Chakra UI](https://raptis.wtf/blog/build-a-landing-page-with-chakra-ui-part-1/) - Learn more details about the template's file structure & tricks I usually use
- [Create A Chakra UI Nav Bar component](https://raptis.wtf/blog/create-a-navbar-with-chakra-ui-react/) - Learn more details about the template's file structure & tricks I usually use
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

- [Chakra UI Official Documentation](https://chakra-ui.com/docs/getting-started) - Learn how to use the Chakra UI API

## Bug reports & Questions

Feel free to [email me anytime](mailto:dimitrisraptis96@gmail.com)) and share your thoughts/ideas/bugs. Otherwise, [create an issue on the Github repository](https://github.com/dimitrisraptis96/odin-template/issues), and I'll check it asap.

🍻 Happy coding!
