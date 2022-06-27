import { useStaticQuery, graphql } from 'gatsby';

export const useSeoData = () => {
  const data = useStaticQuery(
    graphql`
      query {
        datoCmsSite {
          globalSeo {
            facebookPageUrl
            siteName
            titleSuffix
            fallbackSeo {
              title
            }
          }
        }
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
};
