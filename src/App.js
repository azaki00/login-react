import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page404 from './components/Page404';
import Login from './components/Login';
import AppRouterModule from './AppRouterModule';
import Navbar from './components/Navbar';


function AppRouter() {

  return (
    <div className="App">
      <Navbar />
      <AppRouterModule />
    </div>
  );
}

export default AppRouter;
