import { useStaticQuery, graphql } from 'gatsby'

export const useLayoutData = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
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
        }
      }
    }
  `)
  return data
}
