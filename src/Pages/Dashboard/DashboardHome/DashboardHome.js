import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
  const {user} = useAuth();
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-lg-12">
          <h4>Hello, <span className="text-primary fw-bold">{user.displayName}</span> welcome to Comfort Car Palace. Hope you are looking for a car for purchase. Yes, you have got the right decision to come here.</h4>
          <img width="75%" className="d-block mx-auto mt-4" src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/ccp/car.gif" alt="" />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;