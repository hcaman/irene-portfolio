import { useStaticQuery, graphql } from 'gatsby'

export const useServicesData = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsServiceItem {
        nodes {
          icon
          iconsize
          description
          title
          id
        }
      }
      allDatoCmsSectionsTitle(filter: { section: { regex: "/service/" } }) {
        nodes {
          section
          linkMenu
          linkName
          littleTitle
          mainTitle
          originalId
        }
      }
    }
  `)
  return data
}
