import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect( () => {
        fetch(`https://rocky-journey-45608.herokuapp.com/orders`)
        .then(res => res.json())
        .then(data => setOrders(data));
    }, []);

      const handleDelete = id => {
      const proceed = window.confirm('Are you sure, you want to remove this order?');      
      if(proceed){
        const url = `https://rocky-journey-45608.herokuapp.com/orders/${id}`;
        fetch(url, {
          method: "DELETE",
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.deletedCount){
            alert('Deleted The Order')
            const remaining = orders.filter(order => order._id !== id);
            setOrders(remaining);
          }
        })
      }
    }

  // const status shipped
  const handleStatus = (id) => {
    fetch(`https://rocky-journey-45608.herokuapp.com/orders/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
    })
    .then(res => res.json())
    .then(data => {
        if (data.modifiedCount > 0) {
            alert('Update shipped status successful');
        }
    })

  };  

    return (
        <div className="container mb-5">
          <div className="row gy-4 justify-content-center">
              <h1 className="text-center text-primary mt-5 mb-2 fw-bold">Manage All Orders</h1>
              {
                orders.map(order => <div className="col-lg-4 text-left border border-1 py-3 mx-3" key={order._id}>
                    <h3><b className="text-primary mt-3">Product Name:</b> {order.pname}</h3>
                    <h5><b className="text-primary">Product Price:</b> ${order.price}</h5>
                    <h5 className="text-primary mt-3">Client Name: {order.name}</h5>
                    <p><b className="text-primary">Client Email:</b> <b>{order.email}</b></p>
                    <p><b className="text-primary">Order Status:</b> <b className={order.status === "Pending" ? "fw-bold text-dark" : "fw-bold text-success" }>{order.status}</b></p>
                    <button onClick={ () => handleStatus(order._id)} className={order.status === "Pending" ? "btn btn-warning my-2 fw-bold text-dark" : "btn btn-success my-2 fw-bold text-white" }>Status Shipped</button>
                    <br />
                    <button onClick={ () => handleDelete(order._id)} className="btn btn-danger my-2 fw-bold">Remove Order</button>
                  </div>)
              }
          </div>
        </div>
    );
};

export default ManageAllOrders;