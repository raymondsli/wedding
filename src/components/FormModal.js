import "./FormModal.css";
import Modal from "react-modal";
import { useState } from "react";

function FormModal(props) {
  const { modalIsOpen, onClose, customStyles, children } = props;

  const onModalClose = () => {
    onClose();
  };

  return (
    <Modal
      isOpen={modalIsOpen}
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
