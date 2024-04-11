export const CategoryBar = ({category}:{category: string}) => {
    return (
        <>
            <nav className="navbar navbar-expand bg-body-tertiary" id={category}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{category}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <span data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <i className="fas fa-bars" ></i>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}