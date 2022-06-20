import React from 'react';
import Titles from './ui/Titles';
import ServiceItem from './ui/ServiceItem';

const Services = () => {
  return (
    <div className="container-fluid pt-5" id="service">
        <div className="container">
            <Titles mainTitle={'Services'} littleTitle={'My Services'} />
            <div className="row pb-3">
                <ServiceItem title={'Web Design2'} icon={'fa fa-laptop-code'} desc={'descdescdescdescdesc'} link={'linkDesc'} />
            </div>
        </div>
    </div>
  );
}
 
export default Services;