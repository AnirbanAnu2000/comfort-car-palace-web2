import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm(); 

    const onSubmit = data => {
        console.log(data);

        axios.post('https://rocky-journey-45608.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Product added successfully!');
                    reset();
                }
            });
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="add-product">
                        <h2 className="text-primary text-center mt-5 mb-3 fw-bold">Add A New Product</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="form-control mb-3" {...register("name", { required: true, maxLength: 20 })} placeholder="Product Name" />
                            <textarea className="form-control mb-3" {...register("description")} placeholder="Product Description" />
                            <input className="form-control mb-3" type="number" {...register("price")} placeholder="Product Price" />
                            <input className="form-control mb-3" {...register("img")} placeholder="Product image url" />
                            <input className="btn btn-primary mb-5 fw-bold" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;