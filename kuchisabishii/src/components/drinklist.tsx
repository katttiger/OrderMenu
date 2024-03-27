import { useState, useEffect } from "react";
import { DrinkCard } from "./cocktailcard";

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
            {drinks?.drinks.slice(0, 5).map((drink) => (
                <DrinkCard key={drink.idDrink} drink={drink}/>
            ))}
        </>
    )
}