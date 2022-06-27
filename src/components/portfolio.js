import React from 'react'
import { usePortfolioData } from '../hooks/usePortfolioData'
import Titles from './ui/Titles'
import ProtfolioBox from './ui/ProtfolioBox'

// const FilterBtn = ({name, filterName}) => (<li className="btn btn-sm btn-outline-primary m-1 active"  data-filter={filterName}>{name}</li>);

const Portfolio = () => {
  const { allDatoCmsPortfolio, allDatoCmsSectionsTitle } = usePortfolioData()
  const allFilters = [];
  const portfolioElements = allDatoCmsPortfolio.nodes.map((item, i) => {
    const { image, filter, id } = item
    allFilters.push(filter);
    return (
      <ProtfolioBox key={id || i} image={image} filterName={filter} />
    )
  })
  const sectionOpst = {
    sectionName: JSON.parse(allDatoCmsSectionsTitle.nodes[0]?.section)[0],
    mainTitle: allDatoCmsSectionsTitle.nodes[0]?.mainTitle || 'Gallery',
    littleTitle:
      allDatoCmsSectionsTitle.nodes[0]?.littleTitle || 'My Portfolio',
  }
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
        <div className="row portfolio-container">
          {portfolioElements}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
