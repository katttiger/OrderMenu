import styles from "./foodcard.module.css";
import { ProductCardHeader } from "./productcardHeader";
import { CartManager } from "./cartmanager";

export const DrinkCard = ({ drink }: { drink: Drink }) => {
  drink.price = 25;

  return (
    <>
      <div className={styles.productCard} style={{ backgroundImage: `url(${drink.strDrinkThumb})` }} >
      <div className={styles.colorOverlay}></div>
        <ProductCardHeader
          title={drink.strDrink}          
          price={drink.price}
        />
        <CartManager id={drink.idDrink} title={drink.strDrink} price={drink.price} />
      </div>

    </>
  )
}
