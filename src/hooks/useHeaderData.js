import { useStaticQuery, graphql } from 'gatsby'

export const useHeaderData = () => {
  const data = useStaticQuery(graphql`
    query {
      datoCmsHome {
        skills
        name
        firstText
        image {
          gatsbyImageData
          alt
          filename
        }
        linkVideo {
          value
        }
      }
    }
  `)
  return data
}
