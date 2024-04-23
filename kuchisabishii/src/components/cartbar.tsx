import style from "./layout.module.css";

export const Cartbar = ({ cartTotal }: { cartTotal: number }) => {
  return (
    <>
      {cartTotal > 0 && (
        <button
          className={style.cartButton}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasBottom"
          aria-controls="offcanvasBottom"
        >
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn my-1  postition-relative">
              <i className="fa fa-shopping-cart text-white"></i>
              <span className="badge btn-badge rounded-100 mt-1 text-white position-absolute">
                {cartTotal}
              </span>
            </button>

            <span className="fs-2">Cart</span>
            <i className="fa fa-solid fa-chevron-up"></i>
          </div>
        </button>
      )}
    </>
  );
};
