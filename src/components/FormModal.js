import "./css/Modal.css";

import { useContext } from "react";
import AppContext from "../AppContext";
import Modal from "react-modal";

import { getText } from "../stringTranslations";

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

/*
 * Base modal for user inputted form data.
 */
function FormModal(props) {
  const { onClose, onSubmit, submitTooltip, isSubmitDisabled, isSubmitActive } =
    props;
  const { language } = useContext(AppContext);

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
          {getText("Close", language)}
        </button>
        <button
          disabled={isSubmitDisabled}
          title={submitTooltip}
          onClick={onSubmit}
          className={`form-button ${
            isSubmitActive ? "form-button-active" : ""
          }`}
        >
          {getText("Submit", language)}
        </button>
      </div>
    </Modal>
  );
}

export default FormModal;
