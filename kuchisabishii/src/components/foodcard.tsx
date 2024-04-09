import styles from "./foodcard.module.css";
import { ProductCardHeader } from "./productcardHeader";
import { CartManager } from "./cartmanager";

export const Foodcard = ({ food }: { food: Food }) => {
  return (
    <>
      <div
        className={styles.productCard}
        style={{ backgroundImage: `url(${food.imageUrl})` }}
      >
        <ProductCardHeader
          title={food.title}
          description={food.description}
          price={food.price}
        />
        <CartManager id={food._id} title={food.title} price={food.price} />
      </div>
    </>
  );
};
