import { CartItem } from "../types/cart";

const addToCart = <T extends Food | Drink, >(cart: CartItem[], item: T) => {

    let CartItem: CartItem =
    {
      product: item,
      quantity: 1,
      totalItemPrice: item.price
    }

    const isItemICart = cart.find((item) => item.product === item);

    if (isItemICart) {
      isItemICart.quantity++;
      isItemICart.totalItemPrice = (isItemICart.product.price * isItemICart.quantity);
    }

    else {
      cart.push(CartItem);
    }
    
    console.log(cart)
  }