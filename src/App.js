import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Account, AddProduct, Auth,
  Checkout, Detail, EditShop,
  Home, NotFound, Shop, ShopAuth,
  ShopProd, ShopProDetail, ShopProfile
} from './pages';
import ShopSignUp from './pages/ShopAuth/ShopSignUp';

const App = () => {
  return (
    <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/auth" element={<Auth />} />
          <Route exact path="/my-account" element={<Account/>} />
          <Route exact path="/detail/:id" element={<Detail />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/shop/sign-in" element={<ShopAuth />} />
          <Route exact path="/shop/sign-up" element={<ShopSignUp />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/shop/add-product" element={<AddProduct />} />
          <Route exact path="/shop/add-product/:id" element={<AddProduct />} />
          <Route exact path="/shop/view-product/:id" element={<ShopProDetail />} />
          <Route exact path="/shop/products" element={<ShopProd/>} />
          <Route exact path="/shop/profile" element={<ShopProfile />} />
          <Route exact path="/shop/edit-profile" element={<EditShop />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  );
};

export default App;
