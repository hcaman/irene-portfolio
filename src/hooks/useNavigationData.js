import { useStaticQuery, graphql } from 'gatsby'

export const useNavigationData = () => {
  const data = useStaticQuery(graphql`
    query {
      datoCmsNavigation {
        name
        lastname
        buttonText
      }
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
