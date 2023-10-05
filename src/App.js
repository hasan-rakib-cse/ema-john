import React from 'react';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';

import './App.css';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Error from './components/Error/Error';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Manage from './components/Manage/ManageInventory';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <div className='overflow-hidden'>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/product/:key' element={<ProductDetail />} />
          <Route path='/review' element={<Review />} />
          <Route path='/manageInventory' element={<Manage />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
