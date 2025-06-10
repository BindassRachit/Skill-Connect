import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import './index.css';
import HomePage from './landing_page/home/homepage';
import Dashboard from './landing_page/dashboard/dashboard';
import Login from './landing_page/login/login';
import Signup from './landing_page/signup/signup';
import Navbar from "./landing_page/navbar"
import Footer from "./landing_page/footer"
import NotFound from './landing_page/notfound';

// In your main JS file
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/home' element={<HomePage/>}/>
    <Route path="*" element={<NotFound />} />
  </Routes>
  <Footer/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

