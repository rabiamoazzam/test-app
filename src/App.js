import logo from './logo.svg';
import './App.css';
import Home from '../src/pages/home/home.js';
import Catalog from '../src/pages/catalog/catalog.js'
import Contact from '../src/pages/contact/contact.js'
import ItemsCondition from '../src/pages/itemsCondition/itemsCondition.js'
import PopularBrands from '../src/pages/popularBrands/popularBrands.js'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Layouts from './layouts/layouts'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/catalog" element={<Catalog/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/itemsCondition" element={<ItemsCondition/>}/>
      <Route path="/popularBrands" element={<PopularBrands/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
