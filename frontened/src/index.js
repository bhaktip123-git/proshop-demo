import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PrivateRoute from './components/privateroute';
import Homescreen from './screens/Homescreen';
import Productscreen from './screens/Productscreen';
import Cartscreen from './screens/cartscreen';
import LoginScreen from './screens/loginscreen';
import RegisterScreen from './screens/registerscreen';
import ShippingScreen from './screens/Shippingscreen';
import PaymentScreen from './screens/Paymentscreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
       <Route index={true} path='/' element={<Homescreen />} />
       <Route path='/product/:id' element={<Productscreen />} />
        <Route path='/cart' element={<Cartscreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />

        <Route path='' element={<PrivateRoute />}>
          <Route path='/shipping' element={<ShippingScreen />} />
          <Route path='/payment' element={<PaymentScreen />} />
        </Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();