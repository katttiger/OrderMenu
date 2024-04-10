import styles from "./foodcard.module.css";
import { ProductCardHeader } from "./productcardHeader";
import { CartManager } from "./cartmanager";

export const DrinkCard = ({ drink }: { drink: Drink }) => {
  drink.price = 25;
  //   return(
  //       <>
  //       <div className="card" style={{ width: "18rem" }}>
  //           <img src={drink.strDrinkThumb} className="card-img-top" alt="..." />
  //           <div className="card-body">
  //             <h5 className="card-title">{drink.strDrink}</h5>
  //             <p>{drink.price}</p>
  //           </div>
  //         </div>
  //       </>
  // )

  return (
    <>
      <div className={styles.productCard} style={{ backgroundImage: `url(${drink.strDrinkThumb})` }} >
        <ProductCardHeader
          title={drink.strDrink}
          price={drink.price}
        />
        <CartManager id={drink._id} title={drink.title} price={drink.price} />
      </div>

    </>
  )
}
