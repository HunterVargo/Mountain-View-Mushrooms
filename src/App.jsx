import './App.css';
import React from 'react';
import LandingPage from './components/LandingPage.jsx';
import {Routes, Route} from 'react-router-dom';
import Product from './components/ProductPage';
function App() {




  return (
    
    <Routes>
          <Route exact path="/"  element={<LandingPage />} />
          <Route path='/Product' element={<Product />}/>
    </Routes>
  );
}

export default App;
