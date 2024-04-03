import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cocktails } from './pages/cocktails';
import { Sides } from './pages/sides';
import { Food } from './pages/food';
import { Layout } from './components/layout';
import { createContext, useState } from 'react';
import { CartItem } from './types/cart';
import { Cart } from './pages/cart';
import { Payment } from './pages/payment';


export const CartContext = createContext<{
  cart: CartItem[];
  addToCart: (id: string, title: string, price: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;

}>({
  cart: [],
  addToCart: () => { },
  removeFromCart: () => { },
  clearCart:() => {},
});

function App() {
  // const [refresh, setRefresh] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (id: string, title: string, price: number) => {

    const isItemICart = cart.find((item) => item.id === id);
    if (isItemICart) {
      isItemICart.quantity++;
      isItemICart.totalItemPrice = (price * isItemICart.quantity);
    }
    else {
      let CartItem: CartItem =
      {
        id: id,
        title: title,
        singleItemPrice: price,
        quantity: 1,
        totalItemPrice: price
      }
      cart.push(CartItem);
    }
    setCart([...cart]);
  }

  const removeFromCart = (id: string) => {
    let isItemInCart = cart.find((item) => item.id === id)
    if (isItemInCart) {
      isItemInCart.quantity--;
      isItemInCart.totalItemPrice = (isItemInCart.quantity * isItemInCart.singleItemPrice)
      if (isItemInCart.quantity < 1) {
        cart.splice(cart.indexOf(isItemInCart), 1);
      }
    }
    setCart([...cart]);
  }

  const clearCart = () => 
  {
    setCart([]);
  }

  return (
    <>
      <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Food />}></Route>
              <Route path='/food' element={<Food />}></Route>
              <Route path='/sides' element={<Sides />}></Route>
              <Route path="/drinks" element={<Cocktails />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
              <Route path='/payment' element={<Payment />}></Route>
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
