import { useStaticQuery, graphql } from 'gatsby'

export const useNotFound = () => {
  const data = useStaticQuery(graphql`
    query {
      datoCmsNotfound {
        subtitle
        redText
        buttonText
        message
      }
    }
  `)
  return data
}
