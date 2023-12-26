import React, { useState } from 'react';

function ModalGeneric() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleModal}>Abrir Modal</button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <p>Contenido del modal aquí</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalGeneric;