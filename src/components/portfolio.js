import React from 'react';
import { usePortfolioData } from '../hooks/usePortfolioData';
import { useSectionTitles } from '../hooks/useSectionTitles';
import Titles from './ui/Titles';
import ProtfolioBox from './ui/ProtfolioBox';

// const FilterBtn = ({name, filterName}) => (<li className="btn btn-sm btn-outline-primary m-1 active"  data-filter={filterName}>{name}</li>);

const Portfolio = () => {
  const { allDatoCmsPortfolio, allDatoCmsSectionsTitle } = usePortfolioData();
  const defaultTitles = {
    sectionD: 'portfolio',
    mainTitleD: 'Gallery',
    littleTitleD: 'My Portfolio'
  };
  const sectionOpst = useSectionTitles(allDatoCmsSectionsTitle.nodes, defaultTitles);

  if (sectionOpst.showSection === false) {
    return null;
  }

  const allFilters = [];
  const portfolioElements = allDatoCmsPortfolio.nodes.map((item, i) => {
    const { image, filter, id } = item;
    allFilters.push(filter);
    return <ProtfolioBox key={id || i} image={image} filterName={filter} />;
  });
  return (
    <div className="container-fluid pt-5 pb-3" id={sectionOpst.sectionName}>
      <div className="container">
        <Titles
          mainTitle={sectionOpst.mainTitle}
          littleTitle={sectionOpst.littleTitle}
        />
        <div className="row">
          <div className="col-12 text-center mb-2">
            <ul className="list-inline mb-4" id="portfolio-flters">
              {/* {allFilters.map((filter, i) => (filter && <FilterBtn key={i} name={filter} filterName={filter} />))} */}
            </ul>
          </div>
        </div>
        <div className="row portfolio-container">{portfolioElements}</div>
      </div>
    </div>
  );
};

export default Portfolio;
