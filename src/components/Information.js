import React from 'react';
import { useToastContext } from '../ToastContext'

const Information = () => {
  const { handleShowToast } = useToastContext();

  const handleClick = () => {
    handleShowToast('Information', 'info');
  };

  return (
    <div
      style={{
        background: 'blue',
        color: 'white',
        width: '100px',
        height: '50px',
      }}
      onClick={handleClick}
    >
      Information
    </div>
  );
};

export default Information;
