import './App.css'
import { Navbar } from './components/navbar';
import { FoodList } from './components/foodlist';
import { DrinkList } from './components/drinklist';

//Header
//Navigate to food/drink/snacks

//Shoppingcart
//Add logic
//Add/remove buttons
//=>components?

enum foodcategories {
  skaldjur,
  kött
}
enum drinkCategories {
  Beer, OrdinaryDrink, SoftDrink, CoffeeTea, HomemadeLiqueur
}
function App() {

  const foodCategories = ['skaldjur', 'kött']
  const drinkCategories = ['Beer', 'Ordinary Drink', 'Soft Drink', 'Coffee%20\/%20Tea', 'Homemade Liqueur']


  return (
    <>
      <div className='container-fluid'>
        <header>
          <h1>Kuchisabishii</h1>
        </header>
        <Navbar></Navbar>
        
        {foodCategories.map((c) => (
          <FoodList key={c} category={c} />
        ))}
        {drinkCategories.map((c) => (
          <DrinkList key={c} category={c} />
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
                {foodCategories.map((c) => (
                  <li>
                    <a href={`#${c}`} >
                      <span data-bs-dismiss="modal" aria-label="Close">{c}</span>
                    </a>
                  </li>
                ))}
                {drinkCategories.map((c) => (
                  <li>
                    <a href={`#${c}`} >
                      <span data-bs-dismiss="modal" aria-label="Close">{c}</span>
                    </a>
                  </li>
                ))}
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
