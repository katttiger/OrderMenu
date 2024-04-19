import styles from "./foodcard.module.css";
import { ProductCardHeader } from "./productcardHeader";
import { CartManager } from "./cartmanager";

export const Sidecard = ({ side }: { side: Food }) => {
  return (
    <>
      <div className={styles.productCard} style={{ backgroundImage: `url(${side.imageUrl})` }} >
        <ProductCardHeader
          title={side.title}
          description={side.description}
          price={side.price}
          
        />
        <CartManager id={side._id} title={side.title} price={side.price} />
      </div>
    </>
    
  );
};