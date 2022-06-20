import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Titles from './ui/Titles';

const TextSecondary = ({label, text}) => (<div className="col-sm-6 py-2"><h6>{label}: <span className="text-secondary">{text}</span></h6></div>);

const About = () => {
  return (
    <div className="container-fluid py-5" id="about">
        <div className="container">
            <Titles mainTitle={'About'} littleTitle={'About Me'} />
            {/* <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">About</h1>
                <h1 className="position-absolute text-uppercase text-primary">About Me</h1>
            </div> */}
            <div className="row align-items-center">
                <div className="col-lg-5 pb-4 pb-lg-0">
                    {/* <img className="img-fluid rounded w-100" src={"../images/about.jpg"} alt="" /> */}
                    <StaticImage className="img-fluid rounded w-100" src="../images/about.jpg" alt="test" />
                </div>
                <div className="col-lg-7">
                    <h3 className="mb-4">UI/UX Designer & Web Developer</h3>
                    <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum. Amet dolor stet lorem diam dolor justo et dolor dolor dolor</p>
                    <div className="row mb-3">
                        <TextSecondary label={''} text={''} />
                        {/* <div className="col-sm-6 py-2"><h6>Name: <span className="text-secondary">Kate Winslet</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Birthday: <span className="text-secondary">1 April 1990</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Degree: <span className="text-secondary">Master</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Experience: <span className="text-secondary">10 Years</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Phone: <span className="text-secondary">+012 345 6789</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Email: <span className="text-secondary">info@example.com</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Address: <span className="text-secondary">123 Street, New York, USA</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Freelance: <span className="text-secondary">Available</span></h6></div> */}
                    </div>
                    <a href="/#" className="btn btn-outline-primary mr-4">Hire Me</a>
                    <a href="/#" className="btn btn-outline-primary">Learn More</a>
                </div>
            </div>
        </div>
    </div>
  );
}
 
export default About;