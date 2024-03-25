import { useState, useEffect } from 'react'
import './App.css'
import { DrinkCard } from './components/cocktailcard';
import { Navbar } from './components/navbar';
import { FoodList } from './components/foodlist';

//Header
//Navigate to food/drink/snacks

//Shoppingcart
//Add logic
//Add/remove buttons
//=>components?

const cocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink";

function App() {

  const [] = useState();
  const [drinks, setDrinks] = useState<Drinks>();

  const categories = ['skaldjur', 'kött']


  useEffect(() => {
    fetch(cocktailUrl)
      .then((res) => res.json())
      .then((data) => setDrinks(data));
  }, []);

  return (
    <>

      <div className='container-fluid'>
        <header>
          <h1>Kuchisabishii</h1>
        </header>
        <Navbar></Navbar>


        {categories.map((c) => (
          <FoodList key={c} category={c} />
        ))}

        {drinks?.drinks.slice(0, 5).map((drink) => (
          <DrinkCard key={drink.idDrink} drink={drink} />
        ))}
      </div>
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <ul>
                <li>
                  <a href="#kött" >
                    <span data-bs-dismiss="modal" aria-label="Close">kött</span>
                  </a>
                </li>
                <li>
                  <a href="#skaldjur" >
                    <span data-bs-dismiss="modal" aria-label="Close">skaldjur</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
