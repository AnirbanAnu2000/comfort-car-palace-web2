import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import HomePageReview from '../HomePageReview/HomePageReview';

const HomePageReviews = () => {
    const {user} = useAuth();

    const [reviews, setReviews] = useState([]) 
    useEffect(() => {
        fetch('https://rocky-journey-45608.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div id="services" className="mb-5">
            <div className="container py-5 border-bottom border-top border-1">
                <h1 className="text-primary services-heading text-center mb-5 fw-bold">All Reviews</h1>
                <div className="row justify-content-center">
                    {
                        reviews.map(review => <HomePageReview
                            key={review.id}
                            review={review}
                        ></HomePageReview>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomePageReviews;


