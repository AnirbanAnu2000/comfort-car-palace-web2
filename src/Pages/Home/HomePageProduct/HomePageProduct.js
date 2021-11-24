import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePageProduct.css';

const HomePageProduct = (props) => {
  const {name, description, price, img, _id} = props.product;  
  // const url = `/product/${id}`;

  return (
    <Col lg={5} className="mb-4">
      <Card style={{borderRadius:"10px"}} className="product-card p-3">
        <Card.Img variant="top" src={img} style={{height:"330px",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}} />
        <Card.Body>
          <Card.Title><h4 style={{fontSize:"24px"}} className="brand-color fw-bold">{name}</h4></Card.Title>
          <Card.Title><h5 style={{fontSize:"24px"}} className="brand-color fw-bold">${price}</h5></Card.Title>
          <Card.Text>
            {description} 
          </Card.Text>
          <Link to={`/order/${_id}`}>
                  <button className="btn btn-primary fw-bold">Order for {name}</button>
          </Link>
        </Card.Body> 
      </Card>
    </Col>
  );
};

export default HomePageProduct;