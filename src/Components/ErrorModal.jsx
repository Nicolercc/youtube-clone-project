import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "30px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.8)",
  },
};

const ErrorModal = ({ isOpen, onClose, errorMessage }) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        ariaHideApp={false}
      >
        <h2>Oops something went wrong!</h2>
        <p>{errorMessage}</p>
        <button onClick={onClose} className="btn clear">
          Close
        </button>
      </Modal>
    </div>
  );
};

export default ErrorModal;
