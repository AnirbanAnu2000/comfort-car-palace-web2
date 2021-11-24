import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
  
    const [products, setServices] = useState([]); 

    useEffect( () => {
        fetch(`https://rocky-journey-45608.herokuapp.com/products`)
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);

    const handleDelete = id => {
      const proceed = window.confirm('Are you sure, you want to remove this Product?');
      if(proceed){
        const url = `https://rocky-journey-45608.herokuapp.com/products/${id}`;
        fetch(url, {
          method: "DELETE",
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.deletedCount){
            alert('Deleted The Service')
            const remaining = products.filter(product => product._id !== id);
            setServices(remaining);
          }
        })
      }
    }

    return (
        <div className="container mb-5">
          <h1 className="text-center text-primary my-5">Manage Products</h1>
        {
          products.map(product => 
            <div className="row justify-content-center mb-4">
              <div className="col-lg-4">
                <img src={product.img} className="w-100 rounded rounded-3" height="270px" alt="" />
              </div>
              <div className="col-lg-6">
                <h3 className="brand-color mt-3"><b className="text-primary">Product Name:</b> {product.name}</h3>
                <h5><b className="text-primary">Product Price:</b> ${product.price}</h5>
                <p><b className="text-primary">Product Detail</b>: {product.description}</p>
                <button onClick={ () => handleDelete(product._id)} className="btn btn-danger fw-bold my-3">Delete</button>
              </div>
            </div>) 
        }
        </div>
    );
};

export default ManageProducts;