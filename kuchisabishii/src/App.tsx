import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Cocktails } from './pages/cocktails';
import { Sides } from './pages/sides';
import { Food } from './pages/food';
import { Layout } from './components/layout';

//Header
//Navigate to food/drink/snacks

//Shoppingcart
//Add logic
//Add/remove buttons
//=>components?


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Food />}></Route>
          <Route path='/food' element={<Food />}></Route>
          <Route path='/sides' element={<Sides />}></Route>
          <Route path="/drinks" element={<Cocktails />}></Route>
          {/* WildCard Route AKA alla andra route går mot denna*/}
          <Route path='*' element={<Food />}></Route>
        </Route>
      </Routes>
    </Router>
    
    {/* 
      <div className='container-fluid'>
        <header>
          <h1>Kuchisabishii</h1>
        </header>
        <Navbar/>
        {foodCategories.map((c) => (
          <FoodList key={c} category={c} />
        ))}
        {drinkCategories.map((c) => (
          <DrinkList key={c} category={c} />
        ))}

      </div>
    */}
      
      
    </>
  )
}

export default App
