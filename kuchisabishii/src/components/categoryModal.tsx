export const CategoryModal = ({ categories }: { categories: string[] }) => {
    return(
        <>
        <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            data-interval={1000}
        >
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                    <div className="modal-header d-flex alignt-items-center justify-content-between">
                        {/* Tom div för justify between */}
                        <div className="w-25"></div>
                        <div className="w-50 d-flex justify-content-center">
                            <h1
                                className="modal-title text-white m-0"
                                id="exampleModalLabel"
                            >
                                Categories
                            </h1>
                        </div>
                        <div className="w-25 d-flex justify-content-end">
                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                style={{
                                    transform: "scale(1.5)",
                                    margin: "0",
                                    height: "2em",
                                    width: "2em",
                                }}
                            ></button>
                        </div>
                    </div>
                    <div
                        className="modal-body d-flex justify-content-center align-items-center"
                        style={{ backgroundColor: "transparent", marginRight: "1em" }}
                    >
                        <ul>
                            {categories.map((c) => (
                                <li key={c}>
                                    <a href={`#${c}`}>
                                        <h2 data-bs-dismiss="modal" aria-label="Close">
                                            {c}
                                        </h2>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}