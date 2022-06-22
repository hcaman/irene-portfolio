import React from 'react';
import { useNotFound } from '../hooks/useNotFound'

const NotFound = () => {
  const { datoCmsNotfound } = useNotFound()
  const { subtitle, redText, buttonText, message } = datoCmsNotfound
  return ( 
    <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
            <h1 className="display-1 fw-bold">404</h1>
            <p className="fs-3"> <span className="text-danger">{redText}</span> {subtitle}</p>
            <p className="lead">{message}</p>
            <a href="/" className="btn btn-primary">{buttonText}</a>
        </div>
    </div>
  );
}
 
export default NotFound;