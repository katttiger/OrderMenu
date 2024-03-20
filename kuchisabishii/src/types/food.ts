type Food = {
    _id: string,
    title: string,
    avgRating: number[],
    description: string,
    imageUrl: string,
    categories: string[]
    //ingredients: Ingredient[]
}

type Ingredient = {
    _id: string,
    name: string,
    amount: number,
    unit: string
}