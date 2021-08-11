import React from 'react';
import { useToastContext } from '../ToastContext';

const Error = () => {
  const { handleShowToast } = useToastContext();

  const handleClick = () => {
    handleShowToast('Error', 'error');
  };

  return (
    <div
      style={{
        background: 'red',
        color: 'white',
        width: '100px',
        height: '50px',
      }}
      onClick={handleClick}
    >
      Error
    </div>
  );
};
export default Error;
