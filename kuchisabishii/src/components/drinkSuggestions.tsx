import styles from "./drinkSuggestions.module.css"
import { useEffect, useState, useContext } from "react";
import {CartContext} from "../App"
import { DrinkCard } from "./drinkcard";
import { Link } from "react-router-dom";

interface DrinkSuggestionsProps {
    foodId: string
}

export const DrinkSuggestions = ({foodId}: DrinkSuggestionsProps) => {
    const cocktailUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Beer`;
    const {beverages, beveragesAlgorithm} = useContext(CartContext);
    const [drinks, setDrinks] = useState<Drinks>();
    
    const suggestedBeverageIds = beveragesAlgorithm[foodId] || [];
    const suggestedBeverages = beverages.drinks.filter(beverage => suggestedBeverageIds.includes(beverage.idDrink));
    
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
                {/* {drinkSuggestion?.map((suggestion) => (
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
                ))} */}
                <div className={styles.testdiv}>
                    {suggestedBeverages.map((drink, index) => (
                        <div>
                            <img key={index} src={drink.strDrinkThumb} style={{maxHeight: '5rem'}}/>
                        </div>
                        ))}
                </div>
            </div>
        </>
    )
}