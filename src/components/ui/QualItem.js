import React from 'react';

const QualItem = ({ title, company, period, desc = '' }) => (
  <div className="position-relative mb-4">
    <i
      className="far fa-dot-circle text-primary position-absolute"
      style={{ top: '2px', left: '-32px' }}
    ></i>
    <h5 className="font-weight-bold mb-1">{title}</h5>
    <p className="mb-2">
      <strong>{company}</strong> | <small>{period}</small>
    </p>
    {desc && <p>{desc}</p>}
  </div>
);

export default QualItem;
