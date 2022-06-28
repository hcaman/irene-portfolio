import React from 'react';
import { useTestimonialData } from '../hooks/useTestimonialData';
import { useSectionTitles } from '../hooks/useSectionTitles';
import Titles from './ui/Titles';
import { Carousel } from './ui/ClientReview';

const Testimonial = () => {
  const { allDatoCmsTestimonial, allDatoCmsSectionsTitle } =
    useTestimonialData();
  const defaultTitles = {
    sectionD: 'testimonial',
    mainTitleD: 'Review',
    littleTitleD: 'Clients Say'
  };
  const sectionOpst = useSectionTitles(allDatoCmsSectionsTitle.nodes, defaultTitles);
  
  return (
    <div className="container-fluid py-5" id={sectionOpst.sectionName}>
      <div className="container">
        <Titles
          mainTitle={sectionOpst.mainTitle}
          littleTitle={sectionOpst.littleTitle}
        />
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <Carousel clientNodes={allDatoCmsTestimonial.nodes} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
