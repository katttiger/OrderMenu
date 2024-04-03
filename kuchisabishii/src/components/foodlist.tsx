import { useContext, useEffect, useState } from "react";
import { Foodcard } from "./foodcard";
import { CartContext } from "../App";
//import { CartItemtest } from "../types/cart";


export const FoodList = ({ category }: { category: string }) => {
  let url = `https://iths-2024-recept-grupp9-40k2zx.reky.se/categories/${category}/recipes`;

  const [food, setFood] = useState<Food[]>([]);
  const {cart, addToCarttest} = useContext(CartContext);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFood(data))

  }, []);

  // const isFood = (product: Food | Drink): product is Food => {
  //   return (product as Food)._id !== undefined;
  // };

  // const removeFromCart = (cart: CartItem[], food: Food) => {
  //   let isItemInCart = cart.find((item) => item.product === food)
  //   if (isItemInCart) {
  //     isItemInCart.quantity--;
  //     if (isItemInCart.quantity < 1) {
  //       cart.splice(cart.indexOf(isItemInCart), 1);
  //     }
  //   }
  //   console.log(cart);
  //   console.log(cart.find((c) => c.product === food)?.quantity);
  //   setRefresh(!refresh);
  // }

  // const removeFromCart = (cart: CartItem[], id: string) => {
  //   let isItemInCart = cart.find((item) => item.id === id)
  //   if (isItemInCart) {
  //     isItemInCart.quantity--;
  //     if (isItemInCart.quantity < 1) {
  //       cart.splice(cart.indexOf(isItemInCart), 1);
  //     }
  //   }
  //   console.log(cart);
  //   // console.log(cart.find((c) => c.product === food)?.quantity);
  //   setRefresh(!refresh);
  // }

 // const [refresh, setRefresh] = useState(false);

  //using mapping to add to cart
  // const addToCarttest = (id: string, title: string, price: number) => {

  //   const isItemICart = cart.find((item) => item.id === id);
  //   if (isItemICart) {
  //     isItemICart.quantity++;
  //     isItemICart.totalItemPrice = (price * isItemICart.quantity);
  //   }
  //   else {
  //     let CartItem: CartItemtest =
  //     {
  //       id: id,
  //       title: title,
  //       singleItemPrice: price,
  //       quantity: 1,
  //       totalItemPrice: price
  //     }
  //     cart.push(CartItem);
  //   }
  //   console.log(cart);
  //   // console.log(cart.find((c) => c.product === food)?.quantity);
  //   setRefresh(!refresh);
  // }

  // const addToCart = (cart: CartItem[], item: Food | Drink) => {
  //   if (isFood(item)) {
  //     let fooditem: Food = item;

  //     let CartItem: CartItem =
  //     {
  //       id: fooditem._id,
  //       product: item,
  //       quantity: 1,
  //       totalItemPrice: item.price
  //     }
  //     const isItemICart = cart.find((item) => item.id === fooditem._id);

  //     if (isItemICart) {
  //       isItemICart.quantity++;
  //       isItemICart.totalItemPrice = (isItemICart.product.price * isItemICart.quantity);
  //     }
  //     else {
  //       cart.push(CartItem);
  //     }
  //     console.log(cart);
  //     console.log(cart.find((item) => item.id === fooditem._id)?.quantity);
  //     setRefresh(!refresh);

  //   }
  //   else {
  //     let drinkitem: Drink = item;
  //     let CartItem: CartItem =
  //     {
  //       id: item.idDrink,
  //       product: item,
  //       quantity: 1,
  //       totalItemPrice: item.price
  //     }
  //     const isItemICart = cart.find((item) => item.id === drinkitem.idDrink);

  //     if (isItemICart) {
  //       isItemICart.quantity++;
  //       isItemICart.totalItemPrice = (isItemICart.product.price * isItemICart.quantity);
  //     }
  //     else {
  //       cart.push(CartItem);
  //     }
  //     console.log(cart);
  //     console.log(cart.find((item) => item.id === drinkitem.idDrink)?.quantity);
  //     setRefresh(!refresh);
  //   }
  // }

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
              <button className="btn btn-danger" >-</button>
              <span>{cart.find((c) => c.id === food._id)?.quantity}</span>
              {/* <button className="btn btn-success" onClick={() => addToCart(cart, food)}>+</button> */}
              <button className="btn btn-success" onClick={() => addToCarttest(food._id, food.title, food.price)}>+</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}