import React from 'react'
import { useQualificationData } from '../hooks/useQualificationData'
import Titles from './ui/Titles'
import QualItem from './ui/QualItem'

const Qualification = () => {
  const { allDatoCmsQualificationItem, allDatoCmsSectionsTitle } =
    useQualificationData()
  const sectionOpst = {
    sectionName: JSON.parse(allDatoCmsSectionsTitle.nodes[0]?.section)[0],
    mainTitle: allDatoCmsSectionsTitle.nodes[0]?.mainTitle || 'Quality',
    littleTitle:
      allDatoCmsSectionsTitle.nodes[0]?.littleTitle ||
      'Education & Expericence',
  }
  const educationCol = allDatoCmsQualificationItem.nodes.map((item, i) => {
    const { typeQualification, title, place, description, dateInit, dateEnd } =
      item
    const period = `${dateInit} - ${dateEnd}`
    return (
      typeQualification && (
        <QualItem
          key={i}
          title={title}
          company={place}
          period={period}
          desc={description}
        />
      )
    )
  })
  const experienceCol = allDatoCmsQualificationItem.nodes.map((item, i) => {
    const { typeQualification, title, place, description, dateInit, dateEnd } =
      item
    const period = `${dateInit} - ${dateEnd}`
    return (
      !typeQualification && (
        <QualItem
          key={i}
          title={title}
          company={place}
          period={period}
          desc={description}
        />
      )
    )
  })
  return (
    <div className="container-fluid py-5" id={sectionOpst.sectionName}>
      <div className="container">
        <Titles
          mainTitle={sectionOpst.mainTitle}
          littleTitle={sectionOpst.littleTitle}
        />
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h3 className="mb-4">My Education</h3>
            <div className="border-left border-primary pt-2 pl-4 ml-2">
              {educationCol}
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="mb-4">My Expericence</h3>
            <div className="border-left border-primary pt-2 pl-4 ml-2">
              {experienceCol}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Qualification
