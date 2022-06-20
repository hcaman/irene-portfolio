import React from 'react';

const ServiceItem = ({title, icon='fa fa-laptop', iconSize='fa-2x', desc, link}) => (
    <div className="col-lg-4 col-md-6 text-center mb-5">
        <div className="d-flex align-items-center justify-content-center mb-4">
            <i className={`${icon} ${iconSize} service-icon bg-primary text-white mr-3`}></i>
            <h4 className="font-weight-bold m-0">{title}</h4>
        </div>
        {desc && <p>{desc}</p>}
        {link && <a className="border-bottom border-primary text-decoration-none" href={link}>Read More</a>}
    </div>
);

export default ServiceItem;