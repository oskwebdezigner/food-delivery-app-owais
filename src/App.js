import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Views/Home';
import ProductsByRestaurant from './Views/ProductsByRestaurant';
import ScrollToTop from './Components/ScrollTop/ScrollTop';
import SingleProduct from './Views/SingleProduct'

function App() {
  return (
    <BrowserRouter basename='/food-delivery-app-owais'>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants/:id" element={<ProductsByRestaurant  />} />
        <Route path="products/:id" element={<SingleProduct  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
