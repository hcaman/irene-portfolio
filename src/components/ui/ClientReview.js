import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";

const ClientReview = ({name, profession, review, image}) => (
    <div className="text-center">
        <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
        <h4 className="font-weight-light mb-4">{review}</h4>
        <GatsbyImage className="img-fluid rounded-circle mx-auto mb-3" image={image.gatsbyImageData} alt={image.alt || image.filename || 'image'} style={{width: '80px', height: "80px"}} />
        <h5 className="font-weight-bold m-0">{name}</h5>
        <span>{profession}</span>
    </div>
);
 
export default ClientReview;