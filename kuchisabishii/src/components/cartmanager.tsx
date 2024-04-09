import { useContext } from "react";
import styles from "./cartmanager.module.css";
import { CartContext } from "../App";

export const CartManager = ({
  id,
  title,
  price,
}: {
  id: string;
  title: string;
  price: number;
}) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <>
      <div className="row">
        {/* <div className={styles.flexContainer}> */}
        <div className="col-4 m-auto">
          <button
            id={styles.remove}
            className="btn btn-danger col-4"
            onClick={() => removeFromCart(id)}
          >
            -
          </button>
        </div>

        <div className="col-4">
          <span>{cart.find((c) => c.id === id)?.quantity}</span>
        </div>

        <div className="col-4">
          <button
            id={styles.add}
            className="btn btn-success col-4"
            onClick={() => addToCart(id, title, price)}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

{
  /* <div className="row gy-5">
{food.map((food) => (
  <div key={food._id} className="col-lg-3 col-sm-12 col-md-6">
    <Foodcard food={food} />
    <button className="btn btn-danger" onClick={() => removeFromCart(food._id)}>-</button>
    <span>{cart.find((c) => c.id === food._id)?.quantity}</span>
    <button className="btn btn-success" onClick={() => addToCart(food._id, food.title, food.price)}>+</button>
  </div>
))}
</div> */
}
