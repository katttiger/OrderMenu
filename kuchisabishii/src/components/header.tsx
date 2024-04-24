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
        <div className={styles.p}>
          <h1 onClick={handleHeaderClick}>Kuchisabishii</h1>
          <h5>口寂しい </h5>
          {/* <i>
                        Asian fusion for your lonely mouth
                    </i> */}
        </div>
        <Navbar />
      </div>
    </>
  );
};
