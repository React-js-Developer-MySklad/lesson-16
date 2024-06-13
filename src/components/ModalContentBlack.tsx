type Props = {
  onClose: () => void;
};

export const ModalContentBlack = ({ onClose }: Props) => {
  return (
    <div
      className="modal"
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        background: "rgba(0, 0, 0, .5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;

        onClose();
      }}
    >
      <div
        style={{
          width: "300px",
          height: "150px",
          border: "5px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "24px",
        }}
      >
        <div style={{ color: "white" }}>
          <h1>ModalContent Black</h1>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
