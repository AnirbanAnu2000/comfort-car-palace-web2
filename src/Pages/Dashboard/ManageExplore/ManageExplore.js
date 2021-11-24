import React, { useEffect, useState } from 'react';

const ManageExplore = () => {
  
    const [explore, setExplore] = useState([]); 

    useEffect( () => {
        fetch(`https://rocky-journey-45608.herokuapp.com/explore`)
        .then(res => res.json())
        .then(data => setExplore(data));
    }, []);

    const handleDelete = id => {
      const proceed = window.confirm('Are you sure, you want to remove this explore product?');
      if(proceed) {
        const url = `https://rocky-journey-45608.herokuapp.com/explore/${id}`;
        fetch(url, {
          method: "DELETE",
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.deletedCount){
            alert('Deleted The Service')
            const remaining = explore.filter(explorePd => explorePd._id !== id);
            setExplore(remaining);
          }
        })
      }
    }

    return (
        <div className="container mb-5">
          <h1 className="text-center text-primary my-5">Manage All Explore Products</h1>
          {
            explore.map(explorePd => 
              <div className="row justify-content-center mb-4">
                <div className="col-lg-4">
                  <img src={explorePd.img} className="w-100 rounded rounded-3" height="270px" alt="" />
                </div>
                <div className="col-lg-6">
                  <h3 className="brand-color mt-3"><b className="text-primary">Product Name:</b> {explorePd.name}</h3>
                  <h5><b className="text-primary">Product Price:</b> ${explorePd.price}</h5>
                  <p><b className="text-primary">Product Detail</b>: {explorePd.description}</p>
                  <button onClick={ () => handleDelete(explorePd._id)} className="btn btn-danger fw-bold my-3">Delete</button>
                </div>
              </div>) 
            }
          </div>
      );
};

export default ManageExplore;