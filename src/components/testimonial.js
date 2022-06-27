import React from 'react';
import { useTestimonialData } from '../hooks/useTestimonialData';
import Titles from './ui/Titles';
import { Carousel } from './ui/ClientReview';

const Testimonial = () => {
  const { allDatoCmsTestimonial, allDatoCmsSectionsTitle } =
    useTestimonialData();
  const sectionOpst = {
    sectionName: JSON.parse(allDatoCmsSectionsTitle.nodes[0]?.section)[0],
    mainTitle: allDatoCmsSectionsTitle.nodes[0]?.mainTitle || 'Review',
    littleTitle: allDatoCmsSectionsTitle.nodes[0]?.littleTitle || 'Clients Say',
  };
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
