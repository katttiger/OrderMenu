import styles from "./categorybar.module.css"

export const CategoryBar = ({ category }: { category: string }) => {
    return (
        <>
            <nav className="navbar navbar-expand bg-body-tertiary color" id={category}>
                <div id={styles.bar}>
                    <div className="container-fluid">
                        <a className="navbar-brand" id={styles.navbarBrand} href="#">{category}</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <span data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <i className="fas fa-bars"></i>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    )
}