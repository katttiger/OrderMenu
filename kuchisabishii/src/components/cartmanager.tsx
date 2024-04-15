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
  const isItemInCart = cart.some((item) => item.id === id);

  return (
    <>
      <div className={styles.flexContainer}>
        <div>
          <button
            className={`btn btn-danger ${styles.remove}`}
            onClick={() => removeFromCart(id)}
            style={{ visibility: isItemInCart ? "visible" : "hidden" }}
          >
            <span><i className="fa fa-minus" aria-hidden="true"></i></span>
          </button>
        </div>

        <div className={styles.count}>
          <span>{cart.find((c) => c.id === id)?.quantity}</span>
        </div>

        <div>
          <button
            className={`btn btn-success ${styles.add}`}
            onClick={() => addToCart(id, title, price)}
          >
            <span><i className="fa fa-plus" aria-hidden="true"></i></span>
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