import { useState, useEffect } from 'react'
import './App.css'


//API
//type

const foodUrl = "https://iths-2024-recept-grupp9-40k2zx.reky.se/recipes"
const cocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink";

function App() {

  const [] = useState();
  const [drinks, setDrinks] = useState<Drinks>();
  //foodDishes could have a better name.
  const [foodDishes, setFoodDishes] = useState<Food[]>([]);

  useEffect(() => {
    fetch(foodUrl)
      .then((res) => res.json())
      .then((data) => setFoodDishes(data));
  }, []);

  useEffect(() => {
    fetch(cocktailUrl)
      .then((res) => res.json())
      .then((data) => setDrinks(data));
  }, []);

  return (
    <>
      <h1>Hello Kuchisabishii</h1>
      {/* Fix d-flex */}
      <div className='card-group'>
        {foodDishes.map((foodDish) => (
          <div className="card" style={{ width: "18rem" }}>
            <img src={foodDish.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{foodDish.title}</h5>
              <p className="card-text">{foodDish.description}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

        ))}
      </div>
      <div className='card-group'>
        {drinks?.drinks.map((drinks) => (
          <div className="card" style={{ width: "18rem" }}>
            <img src={drinks.strDrinkThumb} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{drinks.strDrink}</h5>
              {/* <p className="card-text">{foodDish.description}</p> */}
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

        ))}
      </div>
    </>
  )
}

export default App
