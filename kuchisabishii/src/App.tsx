import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cocktails } from './pages/cocktails';
import { Sides } from './pages/sides';
import { Food } from './pages/food';
import { Layout } from './components/layout';
import { createContext, useState, useEffect } from 'react';
import { CartItem } from './types/cart';
import { Cart } from './pages/cart';
import { Payment } from './pages/payment';

interface BeveragesAlgorithm {
  [key: string]: string[];  
};

export const CartContext = createContext<{
  cart: CartItem[];
  addToCart: (id: string, title: string, price: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;

  beverages: Drinks;
  beveragesAlgorithm: BeveragesAlgorithm;
}>({
  cart: [],
  addToCart: () => { },
  removeFromCart: () => { },
  clearCart: () => { },
  
  beverages: {drinks: []},
  beveragesAlgorithm: {}
});

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [beverages, setBeverages] = useState<Drinks>({drinks: []})
  const beveragesUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink";
  
  useEffect(() => {
    fetch(beveragesUrl)
      .then((response) => response.json())
      .then((data: Drinks) => setBeverages(data));
    }, [])

  const beveragesAlgorithm = {
    "6602cd1c29f983c33cc71618": ["15300", "3581", "14598", "17105", "13940"],
    "6602cd5229f983c33cc71f7a": ["3581"],
    "6602cd5d29f983c33cc721a8": ["14598"],
    "6602cd6e29f983c33cc72256": ["17105"],
    "6602cd8229f983c33cc724a8": ["13940"],
    "6602cd9329f983c33cc72539": ["15300"],
    "6602cd9e29f983c33cc72570": ["3581"],
    "6602cdaa29f983c33cc725c7": ["14598"],
    "6602cdcb29f983c33cc72719": ["17105"],
  }

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
  // över kring ifall kunden råkar ta bort av misstag ?
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

  const clearCart = () => {
    setCart([]);
  }

  return (
    <>
      <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, beverages, beveragesAlgorithm }}>
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