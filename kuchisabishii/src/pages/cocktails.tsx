import { DrinkList } from "../components/drinklist"
export const Cocktails = () => {

    const drinkCategories = ['Beer', 'Ordinary Drink', 'Soft Drink', 'Coffee%20\/%20Tea', 'Homemade Liqueur']

    return (
        <>
            {drinkCategories.map((c) => (
                <DrinkList key={c} category={c} />
            ))}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Choose a category</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul>
                                {drinkCategories.map((c) => (
                                    <li key={c}>
                                        <a href={`#${c}`} >
                                            <span data-bs-dismiss="modal" aria-label="Close">{c}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}