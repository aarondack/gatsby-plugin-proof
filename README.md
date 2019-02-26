# gatsby-plugin-proof

> Add Proof to your Gatsby site

This plugin gives you the ability to quickly and easily install the Proof pixel into your Gatsby site. More info about the pixel [here](https://useproof.com/)

## Install Your Flavor

`npm install --save gatsby-plugin-proof`

`yarn add gatsby-plugin-proof`

## Setup

In your `gatsby-config.js` file:

```javascript
plugins: [
  {
    resolve: `gatsby-plugin-proof`,
    options: {
      pixelId: `PROOF_PIXEL_ID`
    }
  }
];
```
