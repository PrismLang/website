import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

interface IHelmetProps {
    title?: string;
    description?: string;
}

export default (props: IHelmetProps) => (
  <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `}
        render={data => (
            <Helmet
                defaultTitle={ data.site.siteMetadata.title }
                titleTemplate="%s - Prism"
                title={ props.title }
                meta={[
                {
                    name: "twitter:title",
                    property: "og:title",
                    content: props.title || data.site.siteMetadata.title
                },
                {
                    name: "description",
                    content: props.description || data.site.siteMetadata.description
                },
                {
                    name: "twitter:description",
                    property: "og:description",
                    content: props.description || data.site.siteMetadata.description
                }
                ]}
            />
        )}
  />
);
