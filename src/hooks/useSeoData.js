import { useStaticQuery, graphql } from "gatsby";

export const useSeoData = () => {
    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
                description
                author
              }
            }
          }
        `
    );
    return data;
}