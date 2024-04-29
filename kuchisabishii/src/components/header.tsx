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
      <div className={styles.Header} >
        
        <div className={styles.p} onClick={handleHeaderClick}>
          <h2> 口寂しい</h2>
          
          <p>
            k u c h i s a b i s h i i
          </p>
        </div>
        <Navbar />
      </div>
    </>
  );
};
