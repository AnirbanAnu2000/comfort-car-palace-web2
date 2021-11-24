import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './HomePageReview.css';

const HomePageReview = (props) => {
  const {name, review_comment, email, rating} = props.review;  
  // const url = `/product/${id}`;

  return (
    <Col lg={10} className="mb-4">
      <Card style={{borderRadius:"10px"}} className="review-card">
        <Card.Body>
          <Card.Title><h5 className="brand-color fw-bold">{name}</h5></Card.Title>
          <Card.Text>
            {email} 
          </Card.Text>
          <Card.Text>
            {review_comment} 
          </Card.Text>
          <Rating
          style={{fontSize:"20px"}}
              className="text-primary fw-bold"
              initialRating={rating}
              emptySymbol="far fa-star icon-color"
              fullSymbol="fas fa-star icon-color"
              readonly
              >
            </Rating>
        </Card.Body> 
      </Card>
    </Col>
  );
};

export default HomePageReview;