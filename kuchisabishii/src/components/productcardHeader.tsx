import "./productcardheader.module.css";

export const ProductCardHeader = ({
  title,
  description,
  price}: {
  title: string;
  description: string;
  price: number;
}) => {
  return (
    <>
      <div className="header">
        <div className="d-flex justify-content-between">
          <h1>{title}</h1>
          <h1>{price} SEK</h1>
        </div>
        <p>{description}</p>
      </div>
    </>
  );
};
