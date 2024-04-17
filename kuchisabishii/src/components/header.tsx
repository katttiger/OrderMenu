import { Navbar } from "./navbar"
import styles from "./header.module.css";
//import styles from "./components/header.module.css"

export const Header = () => {
    return (
        <>
            <div className={styles.Header}>
                <h1 className={styles.h1}>
                    Kuchisabishii
                </h1>
                <div className={styles.p}>
                    <i>
                        Asian fusion for your lonely mouth
                    </i>
                </div>
                <Navbar/>
            </div>
            
        </>
    )
}