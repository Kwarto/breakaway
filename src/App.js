import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Footer, NavBar} from './components'
import { Checkout, Detail, Home, NotFound } from './pages';

const App = () => {
  return (
    <>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/detail/:id" element={<Detail />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
    </>
  );
};

export default App;
