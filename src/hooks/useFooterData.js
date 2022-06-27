import { useStaticQuery, graphql } from 'gatsby';

export const useFooterData = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsFooterSocialLink {
        nodes {
          icon
          id
          link {
            value
          }
        }
      }
    }
  `);
  return data;
};
