import React from 'react';
import { useQualificationData } from '../hooks/useQualificationData';
import { useSectionTitles } from '../hooks/useSectionTitles';
import Titles from './ui/Titles';
import QualItem from './ui/QualItem';

const Qualification = () => {
  const { allDatoCmsQualificationItem, allDatoCmsSectionsTitle } =
    useQualificationData();
  const defaultTitles = {
    sectionD: 'qualification',
    mainTitleD: 'Quality',
    littleTitleD: 'Education & Expericence'
  };
  const sectionOpst = useSectionTitles(allDatoCmsSectionsTitle.nodes, defaultTitles);

  if (sectionOpst.showSection === false) {
    return null;
  }

  const educationCol = allDatoCmsQualificationItem.nodes.map((item, i) => {
    const {
      typeQualification,
      title,
      place,
      description,
      dateInit,
      dateEnd,
      id,
    } = item;
    const period = `${dateInit} - ${dateEnd}`;
    return typeQualification ? (
      <QualItem
        key={id || i}
        title={title}
        company={place}
        period={period}
        desc={description}
      />
    ) : null;
  });
  const experienceCol = allDatoCmsQualificationItem.nodes.map((item, i) => {
    const {
      typeQualification,
      title,
      place,
      description,
      dateInit,
      dateEnd,
      id,
    } = item;
    const period = `${dateInit} - ${dateEnd}`;
    return !typeQualification ? (
      <QualItem
        key={id || i}
        title={title}
        company={place}
        period={period}
        desc={description}
      />
    ) : null;
  });
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
  );
};

export default Qualification;
