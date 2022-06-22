import React from 'react'
import { usePortfolioData } from '../hooks/usePortfolioData'
import Titles from './ui/Titles'
import ProtfolioBox from './ui/ProtfolioBox'

// const FilterBtn = ({name, filterName}) => (<li className="btn btn-sm btn-outline-primary m-1 active"  data-filter={filterName}>{name}</li>);

const Portfolio = () => {
  const { allDatoCmsSectionsTitle } = usePortfolioData()
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
              {/* <FilterBtn name={'All'} filterName={'*'} />
                            <li className="btn btn-sm btn-outline-primary m-1 active"  data-filter="*">All</li>
                            <li className="btn btn-sm btn-outline-primary m-1" data-filter=".first">Design</li>
                            <li className="btn btn-sm btn-outline-primary m-1" data-filter=".second">Development</li>
                            <li className="btn btn-sm btn-outline-primary m-1" data-filter=".third">Marketing</li> */}
            </ul>
          </div>
        </div>
        <div className="row portfolio-container">
          <ProtfolioBox imgName={'portfolio-1.jpg'} filterName={'first'} />
        </div>
      </div>
    </div>
  )
}

export default Portfolio
