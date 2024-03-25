export const DrinkCard = ({drink}:{drink: Drink}) => 
{
    return(
        <>
        <div className="card" style={{ width: "18rem" }}>
            <img src={drink.strDrinkThumb} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{drink.strDrink}</h5>
            </div>
          </div>
        </>
  )
}
