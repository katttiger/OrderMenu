import styles from "./foodcard.module.css"
import { ProductCardHeader } from "./productcardHeader"

export const Foodcard = ({ food }: { food: Food }) => {
  return (
    <>
      {/* <div className="card" style={{ width: "18rem" }}>
        <img src={food.imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{food.title}</h5>
          <p className="card-text">{food.description}</p>
          <p className="card-text">{food.price}</p>
        </div>
      </div> */}
      <div className={styles.productCard} style={{backgroundImage:`url(${food.imageUrl})`}}>
        <ProductCardHeader title={food.title} description={food.description} price={food.price}/>

      </div>


    </>
  )
}
