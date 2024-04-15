import styles from "./drinkSuggestions.module.css"
import { useEffect, useState } from "react";
import { DrinkCard } from "./drinkcard";
import { Link } from "react-router-dom";

export const DrinkSuggestions = () => {
    const cocktailUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Beer`;

    const [drinks, setDrinks] = useState<Drinks>();

    useEffect(() => {
        fetch(cocktailUrl)
            .then((res) => res.json())
            .then((data) => setDrinks(data))

    }, []);

    const drinkSuggestion = drinks?.drinks.slice(0, 3);
    return (
        <>
            <div className={styles.suggestionBar}>
                <div className={styles.textStyle}>Cocktail pairings</div>
                {drinkSuggestion?.map((suggestion) => (
                    <div key={suggestion.idDrink}>
                        <button type="button" className={styles.suggestionButton} data-bs-toggle="modal" data-bs-target={`#${suggestion.idDrink}`}
                            data-bs-whatever={suggestion} style={{ backgroundImage: `url(${suggestion?.strDrinkThumb})` }}></button>
                        <div className="modal fade" id={suggestion.idDrink} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <div className="d-flex justify-content-end">
                                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div>
                                            {drinkSuggestion && <DrinkCard drink={suggestion} />}                                        </div>
                                    </div>
                                    <div className="modal-footer d-flex justify-content-between">

                                        <button type="button" className="btn btn-outline-warning text-white" data-bs-dismiss="modal">Go back</button>
                                        <Link to="/drinks">
                                            <button type="button" className="btn btn-outline-warning text-white" data-bs-dismiss="modal">Drink Menu</button>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </>
    )
}