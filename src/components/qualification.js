import React from 'react';
import Titles from './ui/Titles';
import QualItem from './ui/QualItem';

const Qualification = () => {
  return (
    <div className="container-fluid py-5" id="qualification">
        <div className="container">
            <Titles mainTitle={'Quality'} littleTitle={'Education & Expericence'} />
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <h3 className="mb-4">My Education</h3>
                    <div className="border-left border-primary pt-2 pl-4 ml-2">
                        <QualItem title={'Master In CSE'} company={'Cambridge University'} period={'2000 - 2050'} desc={'Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor'} />
                    </div>
                </div>
                <div className="col-lg-6">
                    <h3 className="mb-4">My Expericence</h3>
                    <div className="border-left border-primary pt-2 pl-4 ml-2">
                        <QualItem title={'Web Designer'} company={'Soft Company'} period={'2000 - 2050'} desc={'Dolore ea magna sit amet dolor eirmod.'} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
 
export default Qualification;