import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import './AddReview.css';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm(); 
    const {user} = useAuth();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://rocky-journey-45608.herokuapp.com/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Review posted successfully!');
                    reset();
                }
            });
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="add-product">
                        <h1 className="text-primary fw-bold text-center mt-5 mb-3">Add Your Review</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        
                            <input defaultValue={user.displayName} className="form-control mb-3" {...register("name", { required: true })} placeholder="Name" />

                            <input defaultValue={user.email} className="form-control mb-3" {...register("email", { required: true })} placeholder="Email" />

                            <textarea className="form-control mb-3" {...register("review_comment")} type="text" placeholder="Your Review Comment" />

                            <input className="form-control mb-3" type="number" {...register("rating")} placeholder="Rating a number from 1 to 5" />

                            <input className="btn btn-primary mb-5" type="submit" />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;