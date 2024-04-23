import { Navbar } from "./navbar"
import styles from "./header.module.css";

export const Header = () => {
    return (
        <>
            <div className={styles.Header}>
                
                {/* <h5>口寂しい  </h5> */}
                <div className={styles.p}>
                <h1>
                    Kuchisabishii
                </h1>
                    <i>
                        Asian fusion for your lonely mouth
                    </i>
                </div>
                <Navbar />
            </div>
        </>
    )
}