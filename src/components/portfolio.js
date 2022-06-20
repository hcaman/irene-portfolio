import React from 'react';
import Titles from './ui/Titles';
import ProtfolioBox from './ui/ProtfolioBox';

const FilterBtn = ({name, filterName}) => (<li className="btn btn-sm btn-outline-primary m-1 active"  data-filter={filterName}>{name}</li>);

const Portfolio = () => {
  return (
    <div className="container-fluid pt-5 pb-3" id="portfolio">
        <div className="container">
            <Titles mainTitle={'Gallery'} littleTitle={'My Portfolio'} />
            {/* <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white" style="-webkit-text-stroke: 1px #dee2e6;">Gallery</h1>
                <h1 className="position-absolute text-uppercase text-primary">My Portfolio</h1>
            </div> */}
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
                {/* <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
                    <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid rounded w-100" src="img/portfolio-1.jpg" alt="" />
                        <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href="img/portfolio-1.jpg" data-lightbox="portfolio">
                                <i className="fa fa-plus text-white" style="font-size: 60px;"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
                    <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid rounded w-100" src="img/portfolio-2.jpg" alt="" />
                        <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href="img/portfolio-2.jpg" data-lightbox="portfolio">
                                <i className="fa fa-plus text-white" style="font-size: 60px;"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item third">
                    <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid rounded w-100" src="img/portfolio-3.jpg" alt="" />
                        <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href="img/portfolio-3.jpg" data-lightbox="portfolio">
                                <i className="fa fa-plus text-white" style="font-size: 60px;"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
                    <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid rounded w-100" src="img/portfolio-4.jpg" alt="" />
                        <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href="img/portfolio-4.jpg" data-lightbox="portfolio">
                                <i className="fa fa-plus text-white" style="font-size: 60px;"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
                    <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid rounded w-100" src="img/portfolio-5.jpg" alt="" />
                        <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href="img/portfolio-5.jpg" data-lightbox="portfolio">
                                <i className="fa fa-plus text-white" style="font-size: 60px;"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item third">
                    <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid rounded w-100" src="img/portfolio-6.jpg" alt="" />
                        <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href="img/portfolio-6.jpg" data-lightbox="portfolio">
                                <i className="fa fa-plus text-white" style="font-size: 60px;"></i>
                            </a>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
  );
}
 
export default Portfolio;