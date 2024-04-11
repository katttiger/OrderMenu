import { Link } from "react-router-dom";
import styles from "./drinkSuggestions.module.css"
import { useEffect, useState } from "react";

export const DrinkSuggestions = () => {
    const cocktailUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Beer`;

    const [drinks, setDrinks] = useState<Drinks>();

    useEffect(() => {
        fetch(cocktailUrl)
            .then((res) => res.json())
            .then((data) => setDrinks(data))
    }, []);

    const drinkSuggestion = drinks?.drinks?.[0];
    return (
        <>
            <div className={styles.suggestionBar}>
                <div className={styles.textStyle}>Cocktail pairings</div>

                {/* This is going to be a "map" over the list With parameters. Now is just the same drink...Fix routing with parameters  */}
                <Link to="/drinkSuggestion">
                    <div className={styles.suggestionButton} style={{ backgroundImage: `url(${drinkSuggestion?.strDrinkThumb})` }} />
                    {/* Modal?
                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Choose a category</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">

                                </div>
                            </div>
                        </div>
                    </div> */}
                </Link>

                <Link to="/drinkSuggestion">
                    <div className={styles.suggestionButton} style={{ backgroundImage: `url(${drinkSuggestion?.strDrinkThumb})` }} />
                </Link>
                <Link to="/drinkSuggestion">
                    <div className={styles.suggestionButton} style={{ backgroundImage: `url(${drinkSuggestion?.strDrinkThumb})` }} />
                </Link>
            </div>
        </>
    )
}