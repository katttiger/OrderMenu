import styles from "./productcardheader.module.css";

export const ProductCardHeader = ({
  title,
  description,
  price }: {
    title: string;
    description: string;
    price: number;
  }) => {
  return (
    <>
      <div className={styles.header}>
        <div className="d-flex justify-content-between">
          <h1>{title}</h1>
          <h1>{price} SEK</h1>
        </div>
        <p className={styles.p2}><i>{description}</i>
        </p>
      </div>
    </>
  );
};