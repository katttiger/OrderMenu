import { useState, useEffect } from "react";
import { DrinkCard } from "./drinkcard";
import { CategoryBar } from "./categorybar";
import styles from "./layout.module.css";

export const DrinkList = ({ category }: { category: string }) => {
  const cocktailUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;

  const [drinks, setDrinks] = useState<Drinks>();

  useEffect(() => {
    fetch(cocktailUrl)
      .then((res) => res.json())
      .then((data) => setDrinks(data));
  }, []);

  return (
    <>
      <div
        className="container-fluid"
        style={{ backgroundImage: "url(./assets/images/WoodLight.png)" }}
      >
        <CategoryBar category={category} />

        <div className={`row row-cols-1 m-0 g-0 ${styles.backgroundImage}`}>
          {drinks?.drinks.slice(0, 5).map((drink) => (
            <div key={drink.idDrink} className="col mb-2">
              <DrinkCard drink={drink} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
