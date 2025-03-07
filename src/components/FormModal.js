import "./componentsCss/Modal.css";
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
    width: "400px",
  },
};

function FormModal(props) {
  const { onClose, children } = props;

  const onModalClose = () => {
    onClose();
  };

  return (
    <Modal
      isOpen={true}
      ariaHideApp={false}
      onRequestClose={onModalClose}
      style={customStyles}
    >
      <button className="close-button" onClick={onModalClose}>
        &#x2715;
      </button>
      {children}
    </Modal>
  );
}

export default FormModal;
