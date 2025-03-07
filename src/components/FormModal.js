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
    width: "400px",
    maxWidth: "90%",
  },
};

function FormModal(props) {
  const { onClose, onSubmit, submitTooltip, isSubmitDisabled, isSubmitActive } =
    props;

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
      {props.children}
      <div className="form-buttons-container">
        <button onClick={onClose} className="form-button">
          Close
        </button>
        <button
          disabled={isSubmitDisabled}
          title={submitTooltip}
          onClick={onSubmit}
          className={`form-button ${
            isSubmitActive ? "form-button-active" : ""
          }`}
        >
          Submit
        </button>
      </div>
    </Modal>
  );
}

export default FormModal;
