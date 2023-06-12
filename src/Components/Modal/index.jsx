import { useEffect, useRef, } from "react";
import { ModalStyled } from "./style";

const Modal = ({ isOpen, onClose }) => {

    
    const modalRef = useRef(null);

  const handleClose = () => {
    onClose();
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (isOpen) {
    return (
      <ModalStyled ref={modalRef}>
        <div className="modal-content">
          <header>
            <button onClick={handleClose}>X</button>
            <h2>Carrinho de compras</h2>
          </header>
          <div>
            <h2>Carrinho vazio</h2>
          </div>
        </div>
      </ModalStyled>
    );
  }

  return null;
};

export default Modal;