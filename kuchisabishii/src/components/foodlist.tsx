import { useEffect, useState } from "react";
import { Foodcard } from "./foodcard";
import { CategoryBar } from "./categorybar";

export const FoodList = ({ category }: { category: string }) => {
  let url = `https://iths-2024-recept-grupp9-40k2zx.reky.se/categories/${category}/recipes`;

  const [food, setFood] = useState<Food[]>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFood(data))
  }, []);

  return (
    <>
      <div className="container-fluid">
        <CategoryBar category={category} />

        <div className="row gy-1 m-0">
          {food.map((food) => (
            <div key={food._id} className="col-lg-3 col-sm-12 col-md-6">
              <Foodcard food={food} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}