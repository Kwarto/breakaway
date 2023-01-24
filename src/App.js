import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Auth, Checkout, Detail, Home, NotFound } from './pages';

const App = () => {
  return (
    <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/auth" element={<Auth />} />
          <Route exact path="/detail/:id" element={<Detail />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  );
};

export default App;
