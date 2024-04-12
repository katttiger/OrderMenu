import { useEffect, useState } from "react";
import { Foodcard } from "./foodcard";
import { CategoryBar } from "./categorybar";
import { CategoryModal } from "./categoryModal";

export const FoodList = ({ category }: { category: string }) => {
  let url = `https://iths-2024-recept-grupp9-40k2zx.reky.se/categories/${category}/recipes`;

  const [food, setFood] = useState<Food[]>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFood(data))
  }, []);
  const foodCategories = ['Seafood', 'Chicken', 'Vegetarian', 'Beef']
  return (
    <>
      <div className="container-fluid">
        <div data-bs-toggle="modal" data-bs-target="#categoryModal">
          <CategoryBar category={category} />
        </div>

        <div className="row gy-1 m-0">
          {food.map((food) => (
            <div key={food._id} className="col-lg-3 col-sm-12 col-md-6">
              <Foodcard food={food} />
            </div>
          ))}
        </div>
      </div>
      <div className="modal fade" id="categoryModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" data-interval={1000}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="categoryModal">Choose a category</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <ul>
                {foodCategories.map((c) => (
                  <li key={c}>
                    <a href={`#${c}`} >
                      <span data-bs-dismiss="modal" aria-label="Close">{c}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}