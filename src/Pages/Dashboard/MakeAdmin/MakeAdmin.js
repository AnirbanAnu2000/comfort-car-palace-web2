import React, { useState } from 'react';
// import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch( 'https://rocky-journey-45608.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                  console.log(data);
                  setSuccess(true);
                }
              })

        e.preventDefault();
    }

    return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div>
                <h1 className="text-primary fw-bold mt-5 mb-4 text-center">Make an Admin</h1>
                  <form onSubmit={handleAdminSubmit}>
                      <input 
                      className="form-control"
                      type="email"
                      placeholder="Existing user email for make admin"
                      onBlur={handleOnBlur} />

                      <button className="btn btn-primary mt-4 fw-bold btn-lg" type="submit">Make Admin</button>
                  </form>
                  {success && <div class="alert alert-success" role="alert">Make admin successfully!</div>}
              </div>
            </div>
          </div>
        </div>
    );
};

export default MakeAdmin;