import styles from "./drinkSuggestions.module.css"
import { useEffect, useState } from "react";
import { DrinkCard } from "./drinkcard";

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
                                    <div className="modal-header">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        {drinkSuggestion && <DrinkCard drink={suggestion} />}
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Go back</button>
                                        <button type="button" className="btn btn-primary">Drink Menu</button>
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