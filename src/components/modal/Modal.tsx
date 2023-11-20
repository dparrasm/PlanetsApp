import React from 'react'
import './Modal.scss'

interface ModalProps {
  message: string
  closeModal: () => void
  onSubmit: () => void
}

const Modal: React.FC<ModalProps> = ({ message, closeModal, onSubmit }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content">
        <div>
          <div>
            <span>Remove Planet</span>
          </div>
          <p>{message}</p>
          <div>
            <button onClick={onSubmit}>Remove</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
