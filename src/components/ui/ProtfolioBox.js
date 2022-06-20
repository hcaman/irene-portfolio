import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const ProtfolioBox = ({imgName, atlImg='test', filterName}) => (
  <div className={`col-lg-4 col-md-6 mb-4 portfolio-item ${filterName}`}>
      <div className="position-relative overflow-hidden mb-2">
          <StaticImage className="img-fluid rounded w-100" src="../images/portfolio-1.jpg" alt={atlImg || imgName} />
          <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
              <a href={`../images/${imgName}`} data-lightbox="portfolio">
                  <i className="fa fa-plus text-white icon-font-60px"></i>
              </a>
          </div>
      </div>
  </div>
);
 
export default ProtfolioBox;