import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useAboutData } from '../hooks/useAboutData';
import { useSectionTitles } from '../hooks/useSectionTitles';
import Titles from './ui/Titles';

const TextSecondary = ({ item }) => {
  const label = item.split(':')[0];
  const text = item.split(':')[1];
  return (
    <div className="col-sm-6 py-2">
      <h6>
        {label}: <span className="text-secondary">{text}</span>
      </h6>
    </div>
  );
};

const BtnElement = ({ item, isLast }) => {
  if (item.show) {
    return (
      <a href={item.link} className={`btn btn-outline-primary ${!isLast ? 'mr-4' : ''}`}>
        {item.text}
      </a>
    );
  } else {
    return null
  }
};

const About = () => {
  const { datoCmsAbout, allDatoCmsSectionsTitle } = useAboutData();
  const {
    mainTitle,
    littleTitle,
    subtitle,
    itemsInformation,
    description,
    image,
    buttons,
  } = datoCmsAbout;
  const btnElements = buttons ? JSON.parse(buttons)?.btn || [] : [] ;
  console.log(btnElements);
  const itemsTextSec = itemsInformation ? itemsInformation.split(',\n') : [];
  const defaultTitles = {
    sectionD: 'about',
    mainTitleD: mainTitle || 'About',
    littleTitleD: littleTitle || 'About Me'
  };
  const sectionOpst = useSectionTitles(allDatoCmsSectionsTitle.nodes, defaultTitles);

  if (sectionOpst.showSection === false) {
    return null;
  }

  return (
    <div className="container-fluid py-5" id={sectionOpst.sectionName}>
      <div className="container">
        <Titles
          mainTitle={sectionOpst.mainTitle}
          littleTitle={sectionOpst.littleTitle}
        />
        <div className="row align-items-center">
          <div className="col-lg-5 pb-4 pb-lg-0">
            <GatsbyImage
              className="img-fluid rounded w-100"
              image={image.gatsbyImageData}
              alt={image.alt || image.filename || 'image'}
            />
          </div>
          <div className="col-lg-7">
            <h3 className="mb-4">{subtitle}</h3>
            <p>{description}</p>
            <div className="row mb-3">
              {
                itemsTextSec.length ?
                  itemsTextSec.map((item, i) => (
                    <TextSecondary key={i} item={item} />
                  ))
                : null
              }
            </div>
              {
                btnElements.length ?
                  btnElements.map((item, i) => (
                    <BtnElement key={i} item={item} isLast={i+1 === btnElements.length} />
                  ))
                : null
              }
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
