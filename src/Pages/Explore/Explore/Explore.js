import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import ExploreItem from '../ExploreItem/ExploreItem';
import './Explore.css';

const Explore = () => {

    const [explore, setExplore] = useState([]) 
    useEffect(() => {
        fetch('https://rocky-journey-45608.herokuapp.com/explore')
            .then(res => res.json())
            .then(data => setExplore(data));
    }, [])

    return (
        <div id="explore">
            <Header></Header>
            <div className="container explore-banner">
                <h1 className="explore-banner-heading">
                    Explore All Products
                </h1>
            </div>
            <div className="container py-3 mb-5 border-bottom border-1">
                <h1 className="text-primary explore-heading text-center my-5">Explore All Products</h1>
                <div className="row">
                    {
                      explore.slice(-5).map(exploreItem => <ExploreItem
                        key={exploreItem.id}
                        product={exploreItem}
                        ></ExploreItem>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Explore;


