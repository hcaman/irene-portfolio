import { useStaticQuery, graphql } from 'gatsby'

export const useNavigationData = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsSectionsTitle {
        nodes {
          section
          linkMenu
          linkName
          originalId
        }
      }
    }
  `)
  return data
}
