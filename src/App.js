import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import About from './Pages/About/About';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Explore from './Pages/Explore/Explore/Explore';
import Order from './Pages/Order/Order/Order';
// import Payment from './Pages/Payment/Payment';
import OrderFE from './Pages/OrderFE/OrderFE/OrderFE';
import Payment from './Pages/Dashboard/Payment/Payment';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="">
     <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <PrivateRoute path="/payment">
              <Payment></Payment>
            </PrivateRoute>
            <PrivateRoute path="/order/:productId">
                <Order></Order>
              </PrivateRoute>
            <PrivateRoute path="/orderFE/:exploreId">
                <OrderFE></OrderFE>
              </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/register">
              <Register></Register> 
            </Route>
            <Route path="*">
              <NotFound></NotFound> 
            </Route>
          </Switch>  
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App; 
