import './App.css';
import Header from './Components/Header';
import Landing from './Components/Landing';
import ShowProducts from './Components/ShowProducts';
import Cart from './Components/Cart';
import { Route, Routes } from 'react-router-dom';
import CartProvider from './Context/CartProvide';
function App() {
  return (
    <div className="App">     
      <Header/>
      <CartProvider>
        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='Products' element={<ShowProducts/>}/>
            <Route path='products/cart' element={<Cart/>}/>
          </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
