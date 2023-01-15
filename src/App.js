import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes } from 'react-router-dom';
import {NavBar} from './components'
import { Home, NotFound } from './pages';

const App = () => {
  return (
    <>
      <AnimatePresence>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
