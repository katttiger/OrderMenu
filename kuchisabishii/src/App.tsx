import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cocktails } from './pages/cocktails';
import { Sides } from './pages/sides';
import { Food } from './pages/food';
import { Layout } from './components/layout';
import { createContext, useState } from 'react';
import { CartItemtest } from './types/cart';
import { Cart } from './pages/cart';

//Shoppingcart
//Add logic
//Add/remove buttons
//=>components?

// export const CartContext = createContext<{
//   cart: CartItem[];
//   addToCart: (item: Food) => void;
// }>({
//   cart: [],
//   addToCart: () => { },
// });

export const CartContext = createContext<CartItemtest[]>([]);

function App() {
  const [cart] = useState<CartItemtest[]>([]);

  return (
    <>
     <CartContext.Provider value={cart}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Food />}></Route>
            <Route path='/food' element={<Food />}></Route>
            <Route path='/sides' element={<Sides />}></Route>
            <Route path="/drinks" element={<Cocktails />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            {/* WildCard Route AKA alla andra route går mot denna*/}
            <Route path='*' element={<Food />}></Route>
          </Route>
        </Routes>
      </Router>
     </CartContext.Provider >
    </>
  )
}

export default App
