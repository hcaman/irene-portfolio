import React from 'react';

const Titles = ({ mainTitle, littleTitle = '' }) => {
  return (
    <div className="position-relative d-flex align-items-center justify-content-center">
      <h1 className="display-1 text-uppercase text-white text-stroke-1px">{mainTitle}</h1>
      <h1 className="position-absolute text-uppercase text-primary">{littleTitle || mainTitle}</h1>
    </div>
  );
}
 
export default Titles;