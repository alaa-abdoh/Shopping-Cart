import './App.css';
import Header from './Components/Header';
import Landing from './Components/Landing';
import ShowProducts from './Components/ShowProducts';
import Cart from './Components/Cart';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='Products' element={<ShowProducts/>}/>
        <Route path='products/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
