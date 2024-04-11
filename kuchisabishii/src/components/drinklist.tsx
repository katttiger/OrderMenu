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
          <div className="container-fluid">
            <CategoryBar category={category} />
    
            <div className="row gy-1 m-0">
                    {drinks?.drinks.slice(0, 5).map((drink) => (
                        <div key={drink.idDrink} className="col-lg-3 col-sm-12 col-md-6">
                            <DrinkCard drink={drink} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}