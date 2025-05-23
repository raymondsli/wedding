import "./css/Modal.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "16px",
    width: "450px",
    maxWidth: "90%",
  },
};

/*
 * Base modal for displaying info (no form input).
 */
function InfoModal(props) {
  const { onClose, children } = props;

  return (
    <Modal
      isOpen={true}
      ariaHideApp={false}
      onRequestClose={onClose}
      style={customStyles}
    >
      <button className="close-x-button" onClick={onClose}>
        &#x2715;
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "Caveat, 'LXGWWenKaiTC'",
          fontSize: "20px",
        }}
      >
        {children}
      </div>
    </Modal>
  );
}

export default InfoModal;
