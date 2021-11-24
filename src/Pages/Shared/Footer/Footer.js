import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <Container className="py-5">
          <Row className="py-5">
            <Col xl={4}>
              <div className="footer-left-content mb-4">
                <h4 style={{fontSize:"24px"}} className="brand-color fw-bold heading-font">Comfort car Palace</h4>
              </div>
              <div>
                <ul style={{paddingLeft:0}} className="contact-social-link">
                  <li><i className="far fa-envelope"></i> comfort.car.palace@gmail.com</li>
                  <li><i className="fas fa-map-marker-alt"></i> Mount Tabor, Monsey, New York.</li>
                  <li><i className="fas fa-phone-volume"></i> 914-59-553-4051</li>
                  <li className="footer-social-links">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-linkedin-in"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-youtube"></i>
                  </li>
                </ul>
              </div>
            </Col>

            <Col xl={4}>
              <h2 style={{fontSize:"24px"}} className="brand-color fw-bold mb-4">Popular Collections</h2>
              <div className="footer-middle-content d-flex align-items-center">
                <ul style={{paddingLeft:0,marginRight:"50px"}}>
                  <li>Toyota Alion</li>
                  <li>Toyota Premio</li>
                  <li>Toyota Crown</li>
                  <li>Nissan Blue Bird</li>
                  <li>Toyota Aqua</li>
                </ul>
                <ul style={{paddingLeft:0}}>
                  <li>Bangla Cars</li>
                  <li>Nissan Sunny</li>
                  <li>Toyota Sianta</li>
                  <li>Valvo</li>
                  <li>Misubishi</li>
                </ul>
              </div>
            </Col>
            <Col xl={4}>
            <h2 style={{fontSize:"24px"}} className="brand-color fw-bold mb-4 footer-instagram">Luxury Collections</h2>
            <div>
              <div className="row footer-gallery">
                <div className="col-lg-4 col-6 p-2">
                  <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/ccp/footer/fg1.jpg" className="w-100 mb-1 rounded rounded-3" alt="" />
                </div>
                <div className="col-lg-4 col-6 p-2">
                  <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/ccp/footer/fg2.jpg" className="w-100 mb-1 rounded rounded-3" alt="" />
                </div>
                <div className="col-lg-4 col-6 p-2">
                  <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/ccp/footer/fg3.jpg" className="w-100 mb-1 rounded rounded-3" alt="" />
                </div>
                <div className="col-lg-4 col-6 p-2">
                  <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/ccp/footer/fg4.jpg" className="w-100 mb-1 rounded rounded-3" alt="" />
                </div>
                <div className="col-lg-4 col-6 p-2">
                  <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/ccp/footer/fg5.jpg" className="w-100 mb-1 rounded rounded-3" alt="" />
                </div>
                <div className="col-lg-4 col-6 p-2">
                  <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/ccp/footer/fg6.jpg" className="w-100 mb-1 rounded rounded-3" alt="" />
                </div>
              </div>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom-part text-center m-0 py-4 fw-bold" style={{backgroundColor:"#111"}}>
        <p className="m-0" style={{color:"#fff"}}>Copyright by @Comfort Car Palace - 2021</p>
      </div>
    </div>
  );
};

export default Footer;