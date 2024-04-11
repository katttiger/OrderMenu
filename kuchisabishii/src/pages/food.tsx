import { FoodList } from "../components/foodlist"
import pic1 from "../assets/images/presentation-1.jpg"
import pic2 from "../assets/images/pic-2.jpg"
import pic3 from "../assets/images/pic-3.jpg"

export const Food = () => {
    const foodCategories = ['Seafood', 'Chicken', 'Vegetarian', 'Beef']

    return (<>
        {/* bildspel 
        Objective: Hitta nya bilder
        */}
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={pic1} className="d-block w-100 h-20" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={pic2} className="d-block w-100 h-20" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={pic3} className="d-block w-100 h-20" alt="..." />
                </div>
            </div>
        </div>

        {foodCategories.map((c) => (
            <FoodList key={c} category={c} />
        ))}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" data-interval={1000}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Choose a category</h1>
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