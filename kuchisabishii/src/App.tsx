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
  [key: string]: string[];
};
type SuggestionContext = {
  drinks: Drinks;
  drinksAlgorithm: DrinksAlgorithm;
};

export const CartContext = createContext<{
  cart: CartItem[];
  addToCart: (id: string, title: string, price: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export const SuggestionContext = createContext<SuggestionContext>({
  drinks: { drinks: [] },
  drinksAlgorithm: {},
});

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [drinks, setDrinks] = useState<Drinks>({ drinks: [] });
  const isMounted = useRef(false);
  // const beveragesUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink";
  const beveragesUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=";
  const drinkCategories = [
    "Beer",
    "Ordinary Drink",
    "Soft Drink",
    "Homemade Liqueur",
  ];

  //Cecilia testar
  useEffect(() => {
    //Beer
    //Ordinary
    //Soft
    //Homemade Liquer
    if (!isMounted.current){
    drinkCategories.map((category) => {
      fetch(beveragesUrl + category)
        .then((response) => response.json())
        .then((data: Drinks) => {
          console.log("the api call is made");
          // const newDrinks = [...drinks.drinks, ...data.drinks.splice(0, 5)];
          // const newDrinks = data.drinks.splice(0, 5);
          setDrinks((prevDrinks) => ({
            drinks: [...prevDrinks.drinks, ...data.drinks.splice(0, 5)],
          }));
        });
    });
    
  }}, []);

  console.log(drinks);

  // const drinksAlgorithm = {
  //   // Key: [Value1, Value2]
  //   //"Foodid": ["drinkid1", "drinkid2",...]
  //   "6602cd1c29f983c33cc71618": ["15300", "14598", "17105", "13940"],
  //   "6602cd5229f983c33cc71f7a": ["14598", "17105", "13581", "13581"],
  //   "6602cd5d29f983c33cc721a8": ["14598", "3581", "13940", "17222"],
  //   "6602cd6e29f983c33cc72256": ["17105", "15300", "17222", "13581"],
  //   "6602cd8229f983c33cc724a8": ["13940", "17105", "17222", "13581"],
  //   "6602cd9329f983c33cc72539": ["15300", "17105", "17222", "13581"],
  //   "6602cd9e29f983c33cc72570": ["17105", "13940", "15300", "13581"],
  //   "6602cdaa29f983c33cc725c7": ["14598", "13940", "17105", "13581"],
  //   "6602cdcb29f983c33cc72719": ["17105", "13940", "14598", "13581"],
  // };
  // const drinksAlgorithm = {
  //   // Key: [Value1, Value2]
  //   //"Foodid": ["drinkid1", "drinkid2",...]
  //   "6602cd1c29f983c33cc71618": ["13581", "14598", "17833"],
  //   "6602cd5229f983c33cc71f7a": ["17105", "13940", "17135"],
  //   "6602cd5d29f983c33cc721a8": ["13128", "13497", "17108"],
  //   "6602cd6e29f983c33cc72256": ["17015", "15086", "14482"],
  //   "6602cd8229f983c33cc724a8": ["17135", "17108", "15933"],
  //   "6602cd9329f983c33cc72539": ["14482", "15933", "17044"],
  //   "6602cd9e29f983c33cc72570": ["15200", "17831", "12820"],
  //   "6602cdaa29f983c33cc725c7": ["12800", "12802", "14482"],
  //   "6602cdcb29f983c33cc72719": ["14888", "13128"],
  // };
  const drinksAlgorithm = {
    // Key: [Value1, Value2]
    //"Foodid": ["drinkid1", "drinkid2",...]
    "6602cd1c29f983c33cc71618": ["13581", "15423", "12796"],
    "6602cd5229f983c33cc71f7a": ["13581", "14598", "12796"],
    "6602cd5d29f983c33cc721a8": ["13581", "12790", "12794"],
    "6602cd6e29f983c33cc72256": ["13581", "15423", "12792"],
    "6602cd8229f983c33cc724a8": ["13581", "15300", "12794"],
    "6602cd9329f983c33cc72539": ["13581", "12790", "14282"],
    "6602cd9e29f983c33cc72570": ["13581", "14598", "15423"],
    "6602cdaa29f983c33cc725c7": ["13581", "12796", "14282"],
    "6602cdcb29f983c33cc72719": ["15423", "14598", "15300"],
  };

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
      <SuggestionContext.Provider value={{ drinks, drinksAlgorithm }}>
        <CartContext.Provider
          value={{ cart, addToCart, removeFromCart, clearCart }}
        >
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Food />}></Route>
                <Route path="/food" element={<Food />}></Route>
                <Route path="/sides" element={<Sides />}></Route>
                <Route path="/drinks" element={<Cocktails />}></Route>
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
