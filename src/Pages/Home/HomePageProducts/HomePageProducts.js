import React, { useEffect, useState } from 'react';
import HomePageProduct from '../HomePageProduct/HomePageProduct';
import '../HomePageProduct/HomePageProduct.css';

const HomePageProducts = () => {

    const [products, setProducts] = useState([]) 
    useEffect(() => {
        fetch('https://rocky-journey-45608.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div id="services">
            <div className="container py-5">
                <h1 className="text-primary services-heading text-center mb-4 fw-bold">Products</h1>
                <div className="row justify-content-center">
                    {
                        products.slice(-4).map(product => <HomePageProduct
                            key={product.id}
                            product={product}
                        ></HomePageProduct>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomePageProducts;


