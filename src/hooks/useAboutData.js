import { useStaticQuery, graphql } from 'gatsby';

export const useAboutData = () => {
  const data = useStaticQuery(graphql`
    query {
      datoCmsAbout {
        description
        mainTitle
        littleTitle
        itemsInformation
        subtitle
        buttons
        image {
          gatsbyImageData
          alt
          filename
        }
      }
      allDatoCmsSectionsTitle(filter: { section: { regex: "/about/" } }) {
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
