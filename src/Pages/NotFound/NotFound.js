import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div>
      <div className="not-found border-top border-2 border-primary">
        <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/ccp/404.jpg" alt="" width="100%" height="100%" />
        <button className="btn btn-light fw-bolder go-to-home-btn btn-lg border border-5 border-primary">
          <Link style={{textDecoration:"none",fontSize:"30px"}} to="/home">Go Back To Home</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;