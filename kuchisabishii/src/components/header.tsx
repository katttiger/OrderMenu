import { Navbar } from "./navbar"
import styles from "./header.module.css";

export const Header = () => {

    return (
        <>
            <div className={styles.Header}>

                {/*Put kanji in header*/}
                {/* <h5>口寂しい  </h5> */}
                {/* Fix onClick => navigate to top of main page */}

                <div className={styles.p}>
                    <h1>
                        Kuchisabishii
                    </h1>
                    <i>
                        Asian fusion for your lonely mouth
                    </i>
                </div>
                <Navbar />
            </div >
        </>
    )
}