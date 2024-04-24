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
            {/* <button className="btn position-relative p-0 mb-2">
              <i className="fa fa-shopping-cart text-white fs-5 position-absolute top-50 end-50"></i>
              <span className="badge btn-badge rounded-100 fs-4 text-white m-0 p-0">
                {cartTotal}
              </span>
            </button> */}
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
