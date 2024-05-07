import { CategorylistModal } from "../components/categorylistModal";
import { DrinkList } from "../components/drinklist";

export const Cocktails = ({
  drinkCategories,
}: {
  drinkCategories: string[];
}) => {

  return (
    <>
      <div style={{ marginTop: "8em" }}>
      {drinkCategories.map((c) => (
                <DrinkList key={c} category={c} />
            ))}
      </div>
      <CategorylistModal categories={drinkCategories}/>
    </>
  );
};
