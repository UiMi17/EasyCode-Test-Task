import { createPortal } from "react-dom";

const TransactionsModal = ({ toggleModal }) => {
  return createPortal(
    <>
      <div
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(178, 171, 171, 0.353)",
        }}
      >
        <div
          style={{
            width: "520px",
            height: "470px",
            backgroundColor: "#ffffff",
          }}
        >
          <button
            type="button"
            onClick={toggleModal}
            style={{ width: "30px", height: "30px" }}
          ></button>
        </div>
      </div>
    </>,
    document.querySelector("#root")
  );
};

export default TransactionsModal;
