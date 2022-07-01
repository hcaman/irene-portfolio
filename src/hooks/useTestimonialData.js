import { useStaticQuery, graphql } from 'gatsby';

export const useTestimonialData = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsTestimonial {
        nodes {
          image {
            gatsbyImageData
            alt
            filename
          }
          name
          review
          profession
        }
      }
      allDatoCmsSectionsTitle(filter: { section: { regex: "/testimonial/" } }) {
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
