<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Blog Site
</h1>
<p align="center">
  backed with Gatsby and Chakra UI
</p>

## 🚀 Setup

1.  **Bootstrap a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    # best practice in Node 10
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory, upgrade the Gatsby and React version.
    Start it up.

    ```shell
    cd my-gatsby-site/
    rm package-lock.json yarn.lock
    yarn add react@latest react-dom@latest Gatsby@2.31.1
    npm run develop
    ```

3. **Install and setup Chakra UI in Gatsby**

    Install the Chakra UI plugin and its peer dependencie.

    ```shell
    yarn add @chakra-ui/gatsby-plugin @chakra-ui/react @emotion/react @emotion/styled framer-motion
    ```
    Add it to Gatsby\'s config and modify the options.

    ```javascript
    // gatsby-config.js
    module.exports = {
      plugins: [
        {
          resolve: "@chakra-ui/gatsby-plugin",
          options: {
            /**
            * @property {boolean} [isResettingCSS=true]
            * if `false`, this plugin will not use `<CSSReset />
            */
            isResettingCSS: true,
            /**
            * @property {boolean} [isUsingColorMode=true]
            * if `false`, this plugin will not use <ColorModeProvider />
            */
            isUsingColorMode: true,
            /**
            * @property {number} [portalZIndex=40]
            * The z-index to apply to all portal nodes. This is useful
            * if your app uses a lot z-index to position elements.
            */
            portalZIndex: 40,
          },
        },
      ],
    }
    ```
    To use custom theme, you can shadow this plugin’s theme.js directory and file with your own theme:

    ```javascript
    // src/@chakra-ui/gatsby-plugin/theme.js
    import { extendTheme } from "@chakra-ui/react";

    const customLayer = {
        layerStyles: {
            base: {
                bg: "gray.50",
                boader: "2px solid",
                boaderColor: "gray.500",
            },
            selected: {
                bg: "teal.500",
                color: "teal.700",
                boaderColor: "orange.500",
            }
        },
    }

    const customTheme = extendTheme(customLayer);

    export default customTheme;
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Gatsby Resources**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

5.  **Chakra UI Resources**

    - [Chakra UI Docs](https://chakra-ui.com/docs/getting-started)

## 🚀 Deployment

Push it to your Github repository and deploy to [Vercel](https://vercel.com/dashboard)
