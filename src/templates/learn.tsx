import { graphql } from "gatsby";
import React from "react";

import Layout from "../layouts/default";
import { COLORS } from "../utils/constants";

export default (props: any) => (
    <Layout
        title={ props.data.markdownRemark.frontmatter.title }
        description={ props.data.markdownRemark.frontmatter.description }
    >
        <div css={{
            display: "flex",
            justifyContent: "space-between",
            "hr": {
                border: "1px solid " + COLORS.LIGHT,
                margin: 50,
            },
            "pre": {
                padding: "20px 30px",
                backgroundColor: COLORS.DARK,
                color: COLORS.LIGHT,
                overflowX: "auto",
                borderRadius: 2,
                boxShadow: "0 5px 20px -10px rgba(0, 0, 0, .5)",
            }
        }}>
            <div css={{
                padding: 20,
                width: "70vw",
                backgroundColor: COLORS.WHITE,
                "@media (max-width: 768px)": {
                    width: "100%",
                },
            }}>
                <div css={{
                    margin: "0 auto",
                    maxWidth: 800,
                }}>
                    <h1>{ props.data.markdownRemark.frontmatter.title }</h1>
                    <p>{ props.data.markdownRemark.frontmatter.description }</p>
                    <hr />
                    <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
                </div>
            </div>

            <div css={{
                padding: 40,
                width: "30vw",
                backgroundColor: COLORS.DARKER,
                "@media (max-width: 768px)": {
                    display: "none",
                },
            }}>
                <div
                    dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.tableOfContents.replace(/(href=")\/\/#/g, "$1#") }}
                    css={{
                        "ul": {
                            margin: 0,
                            padding: 0,
                            listStyle: "none",
                        },
                        "p": {
                            margin: 0,
                        },
                        "li a": {
                            display: "block",
                            paddingTop: 10,
                            paddingBottom: 10,
                            color: COLORS.TONE1,
                        },
                        "li ul": {
                            paddingTop: 10,
                            paddingBottom: 20,
                        },
                        "li ul a": {
                            color: COLORS.LIGHT,
                            fontWeight: 400,
                        },
                    }}
                />
            </div>
        </div>
    </Layout>
);

export const query = graphql`
    query($source: String!, $slug: String!) {
        markdownRemark(fields: { source: { eq: $source }, slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                description
            }
            tableOfContents
        }
    }
`;
