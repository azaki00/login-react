import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './AppRouter.css';
import Page404 from './components/Page404';
import Login from './components/Login';
import Home from './components/Home';



const AppRouterModule = () =>{

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="*" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/404Page" elemnt={<Page404 />}></Route>
        {/* <Route path="*" element={<Page404 />}></Route> */}
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRouterModule;
