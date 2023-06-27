import './App.css';
import React from 'react';
import LandingPage from './components/LandingPage.jsx';
import {Routes, Route} from 'react-router-dom';
import Product from './components/ProductPage';
import SporeFlow from './components/Software';
import Media from './components/Media';
function App() {




  return (
    
    <Routes>
          <Route exact path="/"  element={<LandingPage />} />
          <Route path='/Product' element={<Product/>}/>
          <Route path='/SporeFlow' element={<SporeFlow />}/>
          <Route path='/Media' element={<Media />} />
    </Routes>
  );
}

export default App;
