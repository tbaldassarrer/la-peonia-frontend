import React from 'react';
import './ConfirmModal.css'; // reutiliza estilos si quieres

const ConfirmModal = ({ visible, onConfirm, onCancel }) => {
  if (!visible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>¿Estás segur@ de que quieres eliminar esta entrada?</p>
        <div className="modal-buttons">
          <button className="confirm-button" onClick={onConfirm}>Sí, eliminar</button>
          <button className="cancel-button" onClick={onCancel}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
