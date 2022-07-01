import { useStaticQuery, graphql } from 'gatsby';

export const useQualificationData = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsQualificationItem {
        nodes {
          dateEnd(formatString: "YYYY")
          dateInit(formatString: "YYYY")
          description
          place
          title
          typeQualification
          id
          originalId
        }
      }
      allDatoCmsSectionsTitle(
        filter: { section: { regex: "/qualification/" } }
      ) {
        nodes {
          section
          linkMenu
          linkName
          littleTitle
          mainTitle
          id
          originalId
          showSection
        }
      }
    }
  `);
  return data;
};
