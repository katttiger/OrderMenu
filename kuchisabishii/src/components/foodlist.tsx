import { useContext, useEffect, useState } from "react";
import { Foodcard } from "./foodcard";
import { CartContext } from "../App";
import { CartItem } from "../types/cart";

export const FoodList = ({ category }: { category: string }) => {
  let url = `https://iths-2024-recept-grupp9-40k2zx.reky.se/categories/${category}/recipes`;

  const [food, setFood] = useState<Food[]>([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, []);

  const cart = useContext(CartContext)

  const removeFromCart = (cart: CartItem[], food: Food) => {
    let isItemInCart = cart.find((item) => item.product === food)
    if (isItemInCart) {
      isItemInCart.quantity--;
      if (isItemInCart.quantity < 1) {
        cart.splice(cart.indexOf(isItemInCart), 1);
      }
    }
    console.log(cart);
  }

  const addToCart = (cart: CartItem[], food: Food) => {

    let CartItem: CartItem =
    {
      product: food,
      quantity: 1,
      totalItemPrice: food.price
    }
    const isItemICart = cart.find((item) => item.product === food)
    if (isItemICart) {
      isItemICart.quantity++;
      isItemICart.totalItemPrice = (isItemICart.product.price * isItemICart.quantity);
    }
    else {
      cart.push(CartItem);
    }
    console.log(cart)
  }

  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand bg-body-tertiary" id={category}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">{category}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <span data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i className="fas fa-bars" ></i>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="row gy-5">
          {food.map((food) => (
            <div key={food._id} className="col-lg-3 col-sm-12 col-md-6">
              <Foodcard food={food} />
              {/* Remove from cart */}
              <button className="btn btn-danger" onClick={() => removeFromCart(cart, food)}>-</button>
              <input />
              <button className="btn btn-success" onClick={() => addToCart(cart, food)}>+</button>
            </div>
          ))}
        </div>
      </div>




      {/* Fix hamburgermenu */}
    </>
  )
}