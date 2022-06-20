import React from 'react';
import Titles from './ui/Titles';
import ClientReview from './ui/ClientReview';

const Testimonial = () => {
  return (
    <div className="container-fluid py-5" id="testimonial">
        <div className="container">
            <Titles mainTitle={'Review'} littleTitle={'Clients Say'} />
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="owl-carousel testimonial-carousel">
                        <ClientReview name={'Client Name'} profession={'Profession'} review={'Dolor eirmod diam stet kasd sed. Aliqu rebum est eos.'} imgName={'testimonial-1.jpg'} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
 
export default Testimonial;