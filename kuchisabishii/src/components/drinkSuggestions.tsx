import styles from "./drinkSuggestions.module.css";
import { useContext, useEffect, useState } from "react";
import { SuggestionContext } from "../App";
import { DrinkCard } from "./drinkcard";
import { Link } from "react-router-dom";


export const DrinkSuggestions = ({ foodId, foodCategory }: { foodId: string, foodCategory: string }) => {
    const { drinksAndCategory, drinksAlgorithm } = useContext(SuggestionContext);
    const [drinkSuggestion, setdrinkSuggestions] = useState<Drink[]>([]);

    useEffect(() => {
        const drinkSuggestionsCategory = drinksAndCategory.find((drinks) => drinks.drinkCategory === drinksAlgorithm[foodCategory]);
        const drinkSuggestionsInCategory = drinkSuggestionsCategory?.drinks;
        const suggestions = drinkSuggestionsInCategory && [...drinkSuggestionsInCategory].sort(() => Math.random() - 0.5)
        setdrinkSuggestions(suggestions || []);
    }, [foodId])


    return (
        <>
            <div className={styles.suggestionBar}>
                <div className={styles.textStyle}>Cocktail pairings</div>
                {drinkSuggestion?.slice(0, 3).map((suggestion, index) => (
                    <div key={`#${foodId}&${suggestion.idDrink}&${index}`}>
                        <button
                            type="button"
                            className={styles.suggestionButton}
                            data-bs-toggle="modal"
                            data-bs-target={`#${foodId}&${suggestion.idDrink}`}
                            data-bs-whatever={suggestion}
                            style={{ backgroundImage: `url(${suggestion?.strDrinkThumb})` }}
                        ></button>
                        <div
                            className="modal fade"
                            id={`${foodId}&${suggestion.idDrink}`}
                            tabIndex={-1}
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <div className="d-flex justify-content-end">
                                            <button
                                                type="button"
                                                className="btn-close btn-close-white"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                        <div>
                                            {drinkSuggestion && <DrinkCard drink={suggestion} />}{" "}
                                        </div>
                                    </div>
                                    <div className="modal-footer d-flex justify-content-between">
                                        <button
                                            type="button"
                                            className="btn btn-outline-warning text-white"
                                            data-bs-dismiss="modal"
                                        >
                                            Go back
                                        </button>
                                        <Link to="/drinks">
                                            <button
                                                type="button"
                                                className="btn btn-outline-warning text-white"
                                                data-bs-dismiss="modal"
                                            >
                                                Drink Menu
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
