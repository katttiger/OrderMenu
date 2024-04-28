import styles from "./cartbar.module.css";

export const Cartbar = ({ cartTotal }: { cartTotal: number }) => {
  return (
    <>
      {cartTotal > 0 && (
        <button
          className={styles.cartButton}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasBottom"
          aria-controls="offcanvasBottom"
        >
          <div className="d-flex justify-content-between align-items-baseline px-3">
            <div className="position-relative">
              <span className={styles.cartTotal}>
                {cartTotal}
              </span>
              <i className="fa fa-shopping-cart fs-5"></i>
            </div>

            <h5>Cart</h5>
            <div>
              <i className="fa fa-solid fa-chevron-up fs-5"></i>
            </div>
          </div>
        </button>
      )}
    </>
  );
};
