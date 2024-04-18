import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cocktails } from "./pages/cocktails";
import { Sides } from "./pages/sides";
import { Food } from "./pages/food";
import { Layout } from "./components/layout";
import { createContext, useState, useEffect, useRef } from "react";
import { CartItem } from "./types/cart";
import { Cart } from "./pages/cart";
import { Payment } from "./pages/payment";

type DrinksAlgorithm = {
  [key: string]: string;
};

export type DrinksAndCategory = {
  drinks: Drink[];
  drinkCategory: string;
}

type SuggestionContext = {
  drinksAndCategory: DrinksAndCategory[];
  drinksAlgorithm: DrinksAlgorithm;
};

const drinkCategories = [
  "Beer",
  "Ordinary Drink",
  "Soft Drink",
  "Homemade Liqueur",
];

const drinksAlgorithm = {
  "Seafood": "Beer",
  "Chicken": "Ordinary Drink",
  "Vegetarian": "Soft Drink",
  "Beef": "Homemade Liqueur",
};

export const SuggestionContext = createContext<SuggestionContext>({
  drinksAndCategory: [],
  drinksAlgorithm: {},
});

export const CartContext = createContext<{
  cart: CartItem[];
  addToCart: (id: string, title: string, price: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}>({
  cart: [],
  addToCart: () => { },
  removeFromCart: () => { },
  clearCart: () => { },
});

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [drinksAndCategory, setDrinksAndCategory] = useState<DrinksAndCategory[]>([]);
  const isMounted = useRef(false);
  const beveragesUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=";

  useEffect(() => {
    if (!isMounted.current) {
      drinkCategories.map((category) => {
        fetch(beveragesUrl + category)
          .then((response) => response.json())
          .then((data: Drinks) => {
            const newDrinksAndCategory: DrinksAndCategory = {
              drinks: data.drinks.splice(0, 20),
              drinkCategory: category
            };
            setDrinksAndCategory((prevDrinksAndCategory) => [...prevDrinksAndCategory, newDrinksAndCategory]);
          })
      });
    }
  }, []);

  console.log(drinksAndCategory);

  const addToCart = (id: string, title: string, price: number) => {
    const isItemICart = cart.find((item) => item.id === id);
    if (isItemICart) {
      isItemICart.quantity++;
      isItemICart.totalItemPrice = price * isItemICart.quantity;
    } else {
      let CartItem: CartItem = {
        id: id,
        title: title,
        singleItemPrice: price,
        quantity: 1,
        totalItemPrice: price,
      };
      cart.push(CartItem);
    }
    setCart([...cart]);
  };
  // över kring ifall kunden råkar ta bort av misstag ?
  const removeFromCart = (id: string) => {
    let isItemInCart = cart.find((item) => item.id === id);
    if (isItemInCart) {
      isItemInCart.quantity--;
      isItemInCart.totalItemPrice =
        isItemInCart.quantity * isItemInCart.singleItemPrice;
      if (isItemInCart.quantity < 1) {
        cart.splice(cart.indexOf(isItemInCart), 1);
      }
    }
    setCart([...cart]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <SuggestionContext.Provider value={{ drinksAndCategory, drinksAlgorithm }}>
        <CartContext.Provider
          value={{ cart, addToCart, removeFromCart, clearCart }}
        >
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Food />}></Route>
                <Route path="/food" element={<Food />}></Route>
                <Route path="/sides" element={<Sides />}></Route>
                <Route path="/drinks" element={<Cocktails drinkCategories={drinkCategories} />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/payment" element={<Payment />}></Route>
                {/* WildCard Route AKA alla andra route går mot denna*/}
                <Route path="*" element={<Food />}></Route>
              </Route>
            </Routes>
          </Router>
        </CartContext.Provider>
      </SuggestionContext.Provider>
    </>
  );
}

export default App;
