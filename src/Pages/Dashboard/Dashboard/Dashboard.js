import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import './Dashboard.css';
// import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import DashboardHome from '../DashboardHome/DashboardHome';
import AddExplore from '../AddExplore/AddExplore';
import Payment from '../Payment/Payment';
import MyOrders from '../../MyOrders/MyOrders';
import AddReview from '../AddReview/AddReview';
import ManageProducts from '../ManageProducts/ManageProducts';
import ManageExplore from '../ManageExplore/ManageExplore';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const Dashboard = () => {
  let { path, url } = useRouteMatch();

  const { admin, logout } = useAuth();

  const activeStyle = {
    backgroundColor: "#eee",
    color: "#0d6efd",
    border:"3px solid black"
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <div className="text-center">
            <NavLink to="/home">
              <img className="d-block" height="65px" width="180px" src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/ccp/logo.png" alt="" />
            </NavLink>
          </div>
          <div className="dashboard-nav">
            <NavLink activeStyle={activeStyle} className="dashboard-navbar-link" to="/home">Home</NavLink>
            <NavLink activeStyle={activeStyle} className="dashboard-navbar-link" exact to={`${url}`}>Dashboard</NavLink>
            <NavLink activeStyle={activeStyle} className="dashboard-navbar-link" to={`${url}/payment`}>Payment</NavLink>
            <NavLink activeStyle={activeStyle} className="dashboard-navbar-link" to={`${url}/addReview`}>Add Review</NavLink>
            {
              admin && 
              <div>
                <NavLink activeStyle={activeStyle} className="dashboard-navbar-link" to={`${url}/manageProducts`}>Manage Products</NavLink>
                <NavLink activeStyle={activeStyle} className="dashboard-navbar-link" to={`${url}/manageExplore`}>Manage Explore</NavLink>
                <NavLink activeStyle={activeStyle} className="dashboard-navbar-link" to={`${url}/manageAllOrders`}>Manage All Orders</NavLink>
                <NavLink activeStyle={activeStyle} className="dashboard-navbar-link" to={`${url}/makeAdmin`}>Make Admin</NavLink>
                <NavLink activeStyle={activeStyle} className="dashboard-navbar-link" to={`${url}/addProduct`}>Add Product</NavLink>
                <NavLink activeStyle={activeStyle} className="dashboard-navbar-link" to={`${url}/addExplore`}>Add Explore</NavLink>
              </div>
            }
            <NavLink activeStyle={activeStyle} className="dashboard-navbar-link" to={`${url}/myOrders`}>My Orders</NavLink>
            <span onClick={logout} className="dashboard-navbar-link dashboard-logout-btn w-100 bg-danger text-left text-white">Logout</span>
          </div>
        </div>
        <div className="col-md-10 p-0">
          <div className="bg-primary py-2 ps-3">
            <h2 className="text-white fw-bold">Dashboard</h2>
          </div>
            <Switch>
              <Route exact path={path}>
                  <DashboardHome></DashboardHome>
              </Route>
              <AdminRoute path={`${path}/makeAdmin`}>
                  <MakeAdmin></MakeAdmin>
              </AdminRoute>
              <Route path={`${path}/addProduct`}>
                  <AddProduct></AddProduct>
              </Route>
              <Route path={`${path}/payment`}>
                  <Payment></Payment>
              </Route>
              <Route path={`${path}/myOrders`}>
                  <MyOrders></MyOrders>
              </Route>
              <Route path={`${path}/addExplore`}>
                  <AddExplore></AddExplore>
              </Route>
              <Route path={`${path}/manageProducts`}>
                  <ManageProducts></ManageProducts>
              </Route>
              <Route path={`${path}/manageExplore`}>
                  <ManageExplore></ManageExplore>
              </Route>
              <Route path={`${path}/manageAllOrders`}>
                  <ManageAllOrders></ManageAllOrders>
              </Route>
              <Route path={`${path}/addReview`}>
                  <AddReview></AddReview>
              </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;