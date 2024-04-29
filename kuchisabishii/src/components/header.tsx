import { Navbar } from "./navbar";
import styles from "./header.module.css";
import { useNavigate, useLocation } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHeaderClick = () => {
    if (location.pathname !== "/food") {
      navigate("/food#carousel");
    } else {
      const section = document.getElementById("carousel");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <div className={styles.Header}>
        <img className={styles.Logo} src="src/assets/images/KuchisabishiiLogo.png" onClick={handleHeaderClick}/>
        {/* <div className={styles.p}>
          <h2 onClick={handleHeaderClick}>Kuchisabishii 口寂しい</h2>
          
          <p><i>
          When you're not hungry, but you eat because your mouth is lonely
          </i></p>
        </div> */}
        <Navbar />
      </div>
    </>
  );
};
