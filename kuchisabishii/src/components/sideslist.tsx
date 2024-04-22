import { useEffect, useState } from "react";
import { Sidecard } from "./sidescard";
import styles from "./layout.module.css";

export const SidesList = () => {
  let url = `https://iths-2024-recept-grupp9-40k2zx.reky.se/categories/Sides/recipes`;

  const [side, setSide] = useState<Food[]>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSide(data));
  }, []);

  return (
    <>
      <div className="container-fluid" id="sides" style={{ marginTop: "7em" }}>
        <div className={`row row-cols-1 m-0 g-0 ${styles.backgroundImage}`}>
          {side.map((side) => (
            <div key={side._id} className="col mb-2">
              <Sidecard side={side} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
