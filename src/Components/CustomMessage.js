import React, { useState } from 'react';
import './CustomMessage.css';

const CustomMessage = ({ message, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return isVisible ? (
    <div className="custom-message">
      <div className="custom-message-content">
        <p>{message}</p>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  ) : null;
};

export default CustomMessage;
