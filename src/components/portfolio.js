import React from 'react';
import Titles from './ui/Titles';
import ProtfolioBox from './ui/ProtfolioBox';

const FilterBtn = ({name, filterName}) => (<li className="btn btn-sm btn-outline-primary m-1 active"  data-filter={filterName}>{name}</li>);

const Portfolio = () => {
  return (
    <div className="container-fluid pt-5 pb-3" id="portfolio">
        <div className="container">
            <Titles mainTitle={'Gallery'} littleTitle={'My Portfolio'} />
            <div className="row">
                <div className="col-12 text-center mb-2">
                    <ul className="list-inline mb-4" id="portfolio-flters">
                        <FilterBtn name={'All_'} filterName={'*'} />
                        <li className="btn btn-sm btn-outline-primary m-1 active"  data-filter="*">All</li>
                        <li className="btn btn-sm btn-outline-primary m-1" data-filter=".first">Design</li>
                        <li className="btn btn-sm btn-outline-primary m-1" data-filter=".second">Development</li>
                        <li className="btn btn-sm btn-outline-primary m-1" data-filter=".third">Marketing</li>
                    </ul>
                </div>
            </div>
            <div className="row portfolio-container">
                <ProtfolioBox imgName={'portfolio-1.jpg'} filterName={'first'}/>
            </div>
        </div>
    </div>
  );
}
 
export default Portfolio;