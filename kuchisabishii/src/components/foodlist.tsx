import { useEffect, useState } from "react";
import { Foodcard } from "./foodcard";
import { CategoryBar } from "./categorybar";
import styles from "./layout.module.css";

export const FoodList = ({ category }: { category: string }) => {
  let url = `https://iths-2024-recept-grupp9-40k2zx.reky.se/categories/${category}/recipes`;

  const [food, setFood] = useState<Food[]>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, []);

  return (
    <>
      <div
        className={`container-fluid d-flex justify-content-center flex-column align-items-center ${styles.backgroundImage}`}
        id={category}
        style={{ scrollMarginTop: "7em" }}
      >
        <CategoryBar category={category} />
        <div className={`row row-cols-1 m-0 g-0 `}>
          {food.map((food) => (
            <div key={food._id} className="col">
              <Foodcard food={food} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
