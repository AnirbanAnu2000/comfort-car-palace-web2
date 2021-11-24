import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import './About.css';


const About = () => {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 about-banner d-flex justify-content-center align-items-center">
            <h1 className="about-banner-heading">
              About Us Page
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-5 about-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 d-flex align-items-center order-md-0 order-1">
              <img style={{borderRadius:"10px"}} className="w-100" src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/ccp/product/p1.jpg" alt="" />
            </div>
            <div className="col-lg-8 ps-3 pe-5 order-md-1 order-0 about-text">
              <h1 className="text-primary fw-bold mt-3 mb-3">About Us</h1>
              <h5 className="mb-3 text-primary">Looking for the original spare parts for your car can be a real problem</h5>
              <p className="text-white">But we can find any detail for any car you can imagine quickly. Our company collaborates with thousands of collectors, warehouses and private workshops to obtain even the rarest automotive goods. We offer car parts for over 2000 of models. Learn more by talking to our representatives. Sell or buy cars easier than ever. Our specialists will advise you a vehicle that meets your requirements on request. We offer a wide range of vehicles: sedans, SUVs, pick-ups, trucks, limousines, and even water and aerial vehicles.</p>
              <button className="btn btn-primary btn-lg fw-bold mt-3">Read More</button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;