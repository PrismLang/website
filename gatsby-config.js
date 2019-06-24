"use strict";

module.exports = {
    siteMetadata: {
        title: "Prism Programming Language",
        description: "Prism is a simple programming language aimed at beginners!",
        siteUrl: "https://prism.traction.com",
    },
    plugins: [
        "gatsby-plugin-emotion",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-filesystem",
            options: {
              name: "learn",
              path: __dirname + "/content/learn/",
              ignore: [ "**/\.*" ],
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
              name: "docs",
              path: __dirname + "/content/docs/",
              ignore: [ "**/\.*" ],
            },
        },
        "gatsby-transformer-remark",
        "gatsby-plugin-typescript",
    ],
};
