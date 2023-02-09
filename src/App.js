import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Account, Auth, Checkout, Detail, Home, NotFound, Shop } from './pages';

const App = () => {
  return (
    <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/auth" element={<Auth />} />
          <Route exact path="/my-account" element={<Account/>} />
          <Route exact path="/detail/:id" element={<Detail />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  );
};

export default App;
