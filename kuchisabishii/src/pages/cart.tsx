import { CartContext } from "../App";
import { useContext, useEffect, useState } from "react";
//import { CartItemtest } from "../types/cart";

export const Cart = () => {
    const {cart} = useContext(CartContext);
    // const [refresh, setRefresh] = useState(false);
    const [total, setTotal] = useState(0);

    useEffect(() => 
    {
        let currentTotal = 0
        cart.forEach((item) => currentTotal += item.totalItemPrice) 
        setTotal(currentTotal);
    }, [])

    const addToCarttest = (id: string, _title: string, price: number) => {

        const isItemICart = cart.find((item) => item.id === id);
        if (isItemICart) {
            isItemICart.quantity++;
            isItemICart.totalItemPrice = (price * isItemICart.quantity);
        }
        // else {
        //     let CartItem: CartItemtest =
        //     {
        //         id: id,
        //         title: title,
        //         singleItemPrice: price,
        //         quantity: 1,
        //         totalItemPrice: price
        //     }
        //     cart.push(CartItem);
        // }
        setTotal(total + price);
    };

    const removeFromCart = (id: string) => {
        let isItemInCart = cart.find((item) => item.id === id)
        if (isItemInCart) {
            isItemInCart.quantity--;
            isItemInCart.totalItemPrice = (isItemInCart.quantity * isItemInCart.singleItemPrice)
            if (isItemInCart.quantity < 1) {
                cart.splice(cart.indexOf(isItemInCart), 1);
            }
        }

        // console.log(cart.find((c) => c.product === food)?.quantity);
        // setRefresh(!refresh);
        setTotal(total - isItemInCart?.singleItemPrice!);
    }

    return (
        <>
            <h1>Checkout</h1>
            <table className="table">
                <tbody>
                    {cart.map((item) => (
                        <tr>
                            <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>-</button>
                            <td>{item.quantity}</td>
                            <td>{item.title}</td>
                            <td>{item.totalItemPrice} SEK</td>
                            <button className="btn btn-danger" onClick={() => addToCarttest(item.id, item.title, item.singleItemPrice)}>+</button>
                        </tr>
                    ))}
                </tbody>
                {/* <p> as a child of <table> causing error in the console  */}
                {cart.length > 0 ?
                    <p>Sum: {total}</p> : <p>Your cart is empty.</p>} 
            </table>
        </>
    )
}