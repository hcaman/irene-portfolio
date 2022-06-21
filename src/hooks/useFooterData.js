import { useStaticQuery, graphql } from "gatsby";

export const useFooterData = () => {
    const data = useStaticQuery(graphql`
        query {
            allDatoCmsFooterSocialLink {
                nodes {
                    icon
                    link {
                        value
                    }
                }
            }
        }
    `);
    return data;
}