import styles from "./foodcard.module.css";
import { ProductCardHeader } from "./productcardHeader";
import { CartManager } from "./cartmanager";
import { useContext } from "react";
import { CartContext } from "../App";
import { DrinkSuggestions } from "./drinkSuggestions";

export const Foodcard = ({ food }: { food: Food }) => {
  const { cart } = useContext(CartContext);
  const isItemInCart = cart.some((item) => item.id === food._id);
  return (
    <>
      <div className={styles.productCard} style={{ backgroundImage: `url(${food.imageUrl})` }} >
        <ProductCardHeader
          title={food.title}
          description={food.description}
          price={food.price}

        />
        <CartManager id={food._id} title={food.title} price={food.price} />
        <div className={styles.drinkSuggestion} style={{ visibility: isItemInCart ? "visible" : "hidden" }}>
          <DrinkSuggestions />
        </div>
      </div>


    </>
  );
};
