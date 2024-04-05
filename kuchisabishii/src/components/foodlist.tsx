import { useContext, useEffect, useState } from "react";
import { Foodcard } from "./foodcard";
import { CartContext } from "../App";

export const FoodList = ({ category }: { category: string }) => {
  let url = `https://iths-2024-recept-grupp9-40k2zx.reky.se/categories/${category}/recipes`;

  const [food, setFood] = useState<Food[]>([]);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFood(data))

  }, []);



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
              <button className="btn btn-danger" onClick={() => removeFromCart(food._id)}>-</button>
              <span>{cart.find((c) => c.id === food._id)?.quantity}</span>
              <button className="btn btn-success" onClick={() => addToCart(food._id, food.title, food.price)}>+</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}