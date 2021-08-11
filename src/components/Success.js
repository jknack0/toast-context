import React from 'react';
import { useToastContext } from '../ToastContext';

const Success = () => {
  const { handleShowToast } = useToastContext();

  const handleClick = () => {
    handleShowToast('Success', 'success')
  }

  return (
    <div
      style={{
        background: 'green',
        color: 'white',
        width: '100px',
        height: '50px',
      }}
      onClick={handleClick}
    >
      Success
    </div>
  );
};

export default Success;
