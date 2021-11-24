import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddExplore = () => {
    const { register, handleSubmit, reset } = useForm(); 

    const onSubmit = data => {
        console.log(data);

        axios.post('https://rocky-journey-45608.herokuapp.com/explore', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Explore added successfully!');
                    reset();
                }
            });
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="add-product">
                        <h2 className="text-primary fw-bold text-center mt-5 mb-3">Add Explore Item</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="form-control mb-3" {...register("name", { required: true, maxLength: 20 })} placeholder="Explore Product Name" />
                            <textarea className="form-control mb-3" {...register("description")} placeholder="Explore Product Description" />
                            <input className="form-control mb-3" type="number" {...register("price")} placeholder="Explore Product Price" />
                            <input className="form-control mb-3" {...register("img")} placeholder="Explore Product image url" />
                            <input className="fw-bold btn btn-primary mb-5" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddExplore;