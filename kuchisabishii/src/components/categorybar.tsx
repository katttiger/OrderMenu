import styles from "./categorybar.module.css"

export const CategoryBar = ({ category }: { category: string }) => {
    return (
        <>
            <nav className={`${styles.category} navbar`} >
                <div className="container-fluid d-flex justify-content-between w-100">
                    <div className="w-25"></div>
                    <div className="w-50 d-flex justify-content-center">
                        <h4 className="my-0">{category}</h4>
                    </div>
                    <div className="w-25">
                        <span
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            className="d-flex justify-content-end pe-3">
                            <i className="fas fa-bars" ></i>
                        </span>
                    </div>
                </div>
            </nav >
        </>
    )
}