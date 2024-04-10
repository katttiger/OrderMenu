import { useState, useEffect, useContext } from "react";
import { DrinkCard } from "./drinkcard";
import {CategoryBar} from "./categorybar";

export const DrinkList = ({ category }: { category: string }) => {
    const cocktailUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
    
    const [drinks, setDrinks] = useState<Drinks>();

    useEffect(() => {
        fetch(cocktailUrl)
            .then((res) => res.json())
            .then((data) => setDrinks(data))
    }, []);

    return (
        <>
<<<<<<< HEAD
            <nav className="navbar bg-body-tertiary" id={category}>
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
            <div className="row gy-1 m-0">
                {drinks?.drinks.slice(0, 5).map((drink) => (
                    <div key={drink.idDrink} className="col-lg-3 col-sm-12 col-md-6">
                        <DrinkCard drink={drink} />
                        <button className="btn btn-danger" onClick={() => removeFromCart(drink.idDrink)}>-</button>
                        <span>{cart.find((c) => c.id === drink.idDrink)?.quantity}</span>
                        <button className="btn btn-success" onClick={() => addToCart(drink.idDrink, drink.strDrink, drink.price)}>+</button>
                    </div>
                ))}
=======
          <div className="container-fluid">
            <CategoryBar category={category} />
    
            <div className="row gy-5">
                    {drinks?.drinks.slice(0, 5).map((drink) => (
                        <div key={drink.idDrink} className="col-lg-3 col-sm-12 col-md-6">
                            <DrinkCard drink={drink} />
                        </div>
                    ))}
                </div>
>>>>>>> 26af639689930985f315d0d3b680dadc61f2a45e
            </div>
        </>
    )
}