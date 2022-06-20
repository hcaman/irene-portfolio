import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const ClientReview = ({name, profession, review, imgName='defaultUnique260391.jpg'}) => (
    <div className="text-center">
        <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
        <h4 className="font-weight-light mb-4">{review}</h4>
        <StaticImage className="img-fluid rounded-circle mx-auto mb-3" src="../images/testimonial-1.jpg" style={{width: '80px', height: "80px"}} alt="test" />
        <h5 className="font-weight-bold m-0">{name}</h5>
        <span>{profession}</span>
    </div>
);
 
export default ClientReview;