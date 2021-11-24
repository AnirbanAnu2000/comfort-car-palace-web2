import React from 'react';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import './HomePageBanner.css';

const HomePageBanner = () => {
  return (

    <div className="home-page-banner-main">
    
    <Container>
    <Row>
      <Col lg={12} className="home-page-banner p-0">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100 slider-img"
              src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/ccp/slider/slider1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1 className="fw-bold home-banner-heading" style={{fontSize:"50px"}}>Comfort Car Palace</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slider-img"
              src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/ccp/slider/slider2.jpg"
              alt="Second slide"
            />
        
            <Carousel.Caption>
              <h1 className="fw-bold home-banner-heading" style={{fontSize:"50px"}}>Comfort Car Palace</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slider-img"
              src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/ccp/slider/slider3.jpg"
              alt="Third slide"
            />
        
            <Carousel.Caption>
              <h1 className="fw-bold home-banner-heading" style={{fontSize:"50px"}}>Comfort Car Palace</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </Col>
        
    </Row>
  </Container> 
    
    </div>     

  );
};

export default HomePageBanner;