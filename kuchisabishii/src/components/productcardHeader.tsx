import styles from "./productcardheader.module.css";

export const ProductCardHeader = ({
  title,
  description,
  price}: {
  title: string;
  description?: string;
  price: number;
}) => {
  return (
    <>
      <div className={styles.header}>
        <div className="d-flex flex-wrap justify-content-between">
          <h1>{title}</h1>
          <h1>{price} kr</h1>
        </div>
        <p className={styles.p}>{description}</p>
      </div>
    </>
  );
}; 
