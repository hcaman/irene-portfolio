import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const ProtfolioBox = ({ image, filterName }) => (
  <div className={`col-lg-4 col-md-6 mb-4 portfolio-item ${filterName}`}>
    <div className="position-relative overflow-hidden mb-2">
      <GatsbyImage
        className="img-fluid rounded w-100"
        image={image.gatsbyImageData}
        alt={image.alt || image.filename || 'image'}
      />
      <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
        <a
          rel="noreferrer"
          target="_blank"
          href={image.gatsbyImageData.images.fallback.src}
          data-lightbox="portfolio"
        >
          <i className="fa fa-plus text-white icon-font-60px"></i>
        </a>
      </div>
    </div>
  </div>
);

export default ProtfolioBox;
