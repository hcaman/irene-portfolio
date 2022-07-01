import { useStaticQuery, graphql } from 'gatsby';

export const useContactData = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsSectionsTitle(filter: { section: { regex: "/contact/" } }) {
        nodes {
          section
          linkMenu
          linkName
          littleTitle
          mainTitle
          originalId
          showSection
        }
      }
    }
  `);
  return data;
};
