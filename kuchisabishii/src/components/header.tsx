import { Navbar } from "./navbar"
import styles from "./header.module.css";
// import styles from "./components/header.module.css"

export const Header = () => 
    {
        return(
            <>
            {/* Center */}
            <h1 className={styles.h1}>
              Kuchisabishii  
            </h1>
            <p className={styles.p}>
                    <i>
                        Asian fusion for your lonely mouth
                    </i>
            </p>
            <Navbar></Navbar>
            </>
        )
    }