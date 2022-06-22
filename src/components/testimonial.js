import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {useTestimonialData} from '../hooks/useTestimonialData';
import Titles from './ui/Titles';
import ClientReview from './ui/ClientReview';

const Testimonial = () => {
    const {allDatoCmsTestimonial, allDatoCmsSectionsTitle} = useTestimonialData();
    const sectionOpst = { 
        sectionName: JSON.parse(allDatoCmsSectionsTitle.nodes[0]?.section)[0],
        mainTitle: allDatoCmsSectionsTitle.nodes[0]?.mainTitle || 'Review',
        littleTitle: allDatoCmsSectionsTitle.nodes[0]?.littleTitle || 'Clients Say'
    };
    const clientReviews = allDatoCmsTestimonial.nodes.map((item, i) => {
        const {name, review, profession, image} = item;
        return (<ClientReview key={i} name={name} profession={profession} review={review} image={image} />);
    });
    return (
        <div className="container-fluid py-5" id={sectionOpst.sectionName}>
            <div className="container">
                <Titles mainTitle={sectionOpst.mainTitle} littleTitle={sectionOpst.littleTitle} />
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <OwlCarousel className="owl-carousel testimonial-carousel"
                            loop items={1} smartSpeed={1500} dots autoplay
                        >
                            {clientReviews}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Testimonial;