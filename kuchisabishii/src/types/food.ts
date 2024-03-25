type Food = {
    _id: string;
    title: string;
    avgRating: number[];
    description: string;
    imageUrl: string;
    categories: string[];
    price: number;
    //ingredients: Ingredient[]
}

type Ingredient = {
    _id: string;
    name: string;
    amount: number;
    unit: string;
}