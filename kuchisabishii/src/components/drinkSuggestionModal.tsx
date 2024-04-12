import { Link } from "react-router-dom";
import styles from "./drinkSuggestions.module.css"
import { useEffect, useState } from "react";

export const DrinkSuggestionModal = () => {
    const cocktailUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Beer`;

    const [drinks, setDrinks] = useState<Drinks>();

    useEffect(() => {
        fetch(cocktailUrl)
            .then((res) => res.json())
            .then((data) => setDrinks(data))
    }, []);
    const drinkSuggestion = drinks?.drinks?.[0];

    return (<>
        {/* Modalen måste byta utseende beroende på om man klickar på kategori eller dryckesförslag
        bool.
        */}
        <div className="modal fade" id="suggestionModal" tabIndex={-1} aria-labelledby="suggestionModal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="suggestionModal">{drinkSuggestion?.strDrink}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Bild
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="fa fa-arrow-left" id={styles.modalButtons} data-bs-dismiss="modal">Go back</button>
                        <Link to="/drinks">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Drink meny</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    </>)
}