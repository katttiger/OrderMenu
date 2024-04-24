import { FoodList } from "../components/foodlist";
import pic1 from "../assets/images/presentation-1.jpg";
import pic2 from "../assets/images/pic-2.jpg";
import pic3 from "../assets/images/pic-3.jpg";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
// import styles from "../components/drinkSuggestions.module.css";
import { CategorylistModal } from "../components/categorylistModal";

export const Food = () => {
  const foodCategories = ["Vegetarian", "Seafood", "Chicken", "Beef"];
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    } else {
      setTimeout(() => {
        const element = document.getElementById("Vegetarian");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <div id="carousel"></div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-pause={false}
        data-bs-interval={4000}
        style={{ paddingTop: "7em" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={pic1}
              className="d-block w-100 h-20"
              alt="Various Asian dishes on a restaurant table"
            />
          </div>
          <div className="carousel-item">
            <img
              src={pic2}
              className="d-block w-100 h-20"
              alt="People enjoying a meal and socializing at a restaurant"
            />
          </div>
          <div className="carousel-item">
            <img
              src={pic3}
              className="d-block w-100 h-20"
              alt="A person eating asian food"
            />
          </div>
        </div>
      </div>
      {/* navigate here on link */}
      <span id="FoodList"></span>
      {foodCategories.map((c) => (
        <FoodList key={c} category={c} />
      ))}
     <CategorylistModal categories={foodCategories}/>
    </>
  );
};
