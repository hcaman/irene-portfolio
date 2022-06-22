import { useStaticQuery, graphql } from 'gatsby'

export const usePortfolioData = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsSectionsTitle(filter: { section: { regex: "/portfolio/" } }) {
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
