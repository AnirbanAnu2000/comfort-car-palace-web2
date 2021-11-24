import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';


const Order = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user} = useAuth();
    const history = useHistory();

    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect( () => {
        fetch(`https://rocky-journey-45608.herokuapp.com/products/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, []);

    const onSubmit = data => {
        // console.log(data);
        data.status = "Pending";

        axios.post('https://rocky-journey-45608.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Your order placed successfully!');
                    reset();
                    history.push('/payment');
                }
            });
    }

    return (
        <div>
        <Header></Header>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 text-center py-5">
                    <img src={product.img} className="w-75 text-center" height="350px" alt="" />
                    <h3 className="mt-3 brand-color">Product Package Name: {product.name}</h3>
                    <h4 className="mt-3">Product Price ${product.price}</h4>
                    <p className="mt-4 px-4">Product In Detail: {product.description}</p>
                </div>
                <div className="col-lg-6">
                    <div className="add-service">
                        <h2 className="brand-color fw-bold text-center mt-5 mb-3">Order for <span className="fw-bold text-danger">{product.name}</span> </h2>
                        <p>Dear <b>{user.displayName}</b> have email <b>{user.email}</b> please fill the form below for proceed to order</p>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input defaultValue={user.displayName} className="form-control mb-3" {...register("name", { required: true })} placeholder="Name" />

                            <input defaultValue={user.email} className="form-control mb-3" {...register("email", { required: true })} placeholder="Email" />

                            <input defaultValue={product.name} className="form-control mb-3" {...register("pname", { required: true, maxLength: 20 })} placeholder="Service Name" />
                            
                            <input className="form-control mb-3" type="number" {...register("phone_number")} placeholder="Your Phone Number" />

                            <input className="form-control mb-3" type="text" {...register("address")} placeholder="Your Delivery Address" />

                            <input readOnly defaultValue={product.price} className="form-control mb-3" type="number" {...register("price")} placeholder="Service Price" />
                            
                            <input className="btn btn-primary mb-5" type="submit" />

                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Order;