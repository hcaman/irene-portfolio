import React from 'react';
import { useServicesData } from '../hooks/useServicesData';
import { useSectionTitles } from '../hooks/useSectionTitles';
import Titles from './ui/Titles';
import ServiceItem from './ui/ServiceItem';

const Services = () => {
  const { allDatoCmsServiceItem, allDatoCmsSectionsTitle } = useServicesData();
  const defaultTitles = {
    sectionD: 'service',
    mainTitleD: 'Services',
    littleTitleD: 'My Services'
  };
  const sectionOpst = useSectionTitles(allDatoCmsSectionsTitle.nodes, defaultTitles);
  
  const seviceItems = allDatoCmsServiceItem.nodes.map((item, i) => {
    const { title, icon, description, iconsize, id } = item;
    const link = item?.link;
    return (
      <ServiceItem
        key={id || i}
        title={title}
        icon={icon}
        iconSize={iconsize}
        desc={description}
        link={link}
      />
    );
  });
  return (
    <div className="container-fluid pt-5" id="service">
      <div className="container">
        <Titles
          mainTitle={sectionOpst.mainTitle}
          littleTitle={sectionOpst.littleTitle}
        />
        <div className="row pb-3">{seviceItems}</div>
      </div>
    </div>
  );
};

export default Services;
