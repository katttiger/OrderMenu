import { DrinkCard } from "../components/drinkcard"

export const DrinkSuggestion = (drinkSuggestion : Drink) =>{
    return(
        <>
            <DrinkCard drink={drinkSuggestion} />
            <button>Go back</button>
            <button>Drink Menu</button>
        </>
    )
}