import { useStaticQuery, graphql } from 'gatsby'

export const useLayoutData = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return data
}
