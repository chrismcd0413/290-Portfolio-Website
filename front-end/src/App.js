
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import NavComponent from './components/Nav.js';
import ProductsData from './data/products.js';
import GalleryPage from './pages/GalleryPage.js';
import StaffPage from './pages/StaffPage.js';
import OrderPage from './pages/OrderPage.js';
import LogPage from './pages/LogPage.js';

import './App.css';
import Nav from './components/Nav.js';
import CreateDeliveryPage from './pages/CreateDelivery';
import UpdateDeliveryPage from './pages/UpdateDelivery';
import TopicsPage from './pages/TopicsPage';

function App() {

  const [delivery, setDeliveryToEdit] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>

        <header className="App-header">
          <h1>Chris McDaniel
            {/* {<img src={logo} className="App-logo" alt="logo" />} */}
          </h1>
        </header>

        <Nav />

        <main>
          <section className="App-article">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/gallery" element={<GalleryPage />} /> 
                <Route path="/deliveries" element={<LogPage setDelivery={setDeliveryToEdit} />} /> 
                <Route path="/staff" element={<StaffPage />} /> 
                <Route path="/order" element={<OrderPage />} /> 
                <Route path="/topics" element={<TopicsPage />} />
                <Route path="/create-delivery" element={<CreateDeliveryPage />} /> 
                <Route path="/update-delivery" element={<UpdateDeliveryPage delivery={delivery} />} /> 

            </Routes>
          </section>
        </main>
        
        <footer>
          <p><cite>&copy; 2023 Chris McDaniel</cite></p>
        </footer>
        
        </BrowserRouter>
      </div>
    );
  }

export default App;
