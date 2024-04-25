import styles from "./food.module.css"
import { FoodList } from "../components/foodlist";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { CategorylistModal } from "../components/categorylistModal";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import pic1 from "../assets/images/presentation-1.jpg";
import pic2 from "../assets/images/pic-2.jpg";
import pic3 from "../assets/images/pic-3.jpg";

export const Food = () => {
  const foodCategories = ["Vegetarian", "Seafood", "Chicken", "Beef"];
  const carouselImages = [pic1, pic2, pic3];
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
  }, []);

  return (
    <>
      <div id="carousel">
        <Carousel 
          className={styles.Carousel} 
          showThumbs={false} 
          showIndicators={false} 
          showArrows={false} 
          autoPlay 
          infiniteLoop 
          interval={4000}>
            {carouselImages.map((image, index) => (
              <img src={image} key={index}/>
            ))}
        </Carousel>
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
