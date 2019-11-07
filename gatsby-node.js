const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === "MarkdownRemark") {
        const { sourceInstanceName } = getNode(node.parent);
        const slug = createFilePath({ node, getNode, basePath: "pages" });

        createNodeField({
            node,
            name: "slug",
            value: slug,
        });

        createNodeField({
            node,
            name: "source",
            value: sourceInstanceName,
        });
    }
};

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        graphql(`
            {
                allMarkdownRemark {
                    edges {
                        node {
                            fields {
                                slug
                                source
                            }
                        }
                    }
                }
            }
        `)
        .then(result => {
            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                let template;
                switch (node.fields.source) {
                    case "docs":
                    case "learn":
                    case "packages":
                        template = "./src/templates/learn.tsx";
                        break;

                    default:
                        return;
                }
                if (!template) return;

                createPage({
                    path: node.fields.source + node.fields.slug,
                    component: path.resolve(template),
                    context: {
                        source: node.fields.source,
                        slug: node.fields.slug,
                    },
                });
            });
            resolve();
        });
    });
};
