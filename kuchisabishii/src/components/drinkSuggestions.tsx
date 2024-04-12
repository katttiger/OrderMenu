import { DrinkSuggestionModal } from "../components/drinkSuggestionModal.tsx";
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
                <button type="button" className={styles.suggestionButton} data-bs-toggle="modal" data-bs-target="#suggestionModal">
                    <div className={styles.suggestionButton} style={{ backgroundImage: `url(${drinkSuggestion?.strDrinkThumb})` }} />
                </button>
                <button type="button" className={styles.suggestionButton} data-bs-toggle="modal" data-bs-target="#suggestionModal">
                    <div className={styles.suggestionButton} style={{ backgroundImage: `url(${drinkSuggestion?.strDrinkThumb})` }} />
                </button>
                <button type="button" className={styles.suggestionButton} data-bs-toggle="modal" data-bs-target="#suggestionModal">
                    <div className={styles.suggestionButton} style={{ backgroundImage: `url(${drinkSuggestion?.strDrinkThumb})` }} />
                </button>
            </div >
            <DrinkSuggestionModal />
        </>
    )
}