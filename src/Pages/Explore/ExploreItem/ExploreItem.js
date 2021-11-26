import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePageProduct = (props) => {
  const {name, description, price, img, _id} = props.product;  
  // const url = `/explore/${_id}`;

  return (
    <Col lg={4} className="mb-4">
      <Card style={{borderRadius:"10px"}} className="product-card p-2">
        <Card.Img variant="top" src={img} style={{height:"300px",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}} />
        <Card.Body>
          <Card.Title><h4 className="brand-color fw-bold">{name}</h4></Card.Title>
          <Card.Title><h4 className="brand-color fw-bold">${price}</h4></Card.Title>
          <Card.Text>
            {description} 
          </Card.Text>
          <Link to={`/orderFE/${_id}`}>
                  <button className="btn btn-primary fw-bold">Order for {name}</button>
          </Link>
        </Card.Body> 
      </Card>
    </Col>
  );
};

export default HomePageProduct;