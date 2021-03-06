import React, { useState, createContext, useContext } from 'react';

export const ToastContext = createContext({
  toast: {},
  setToast: () => {},
});

export const ToastProvider = (props) => {
  const [toast, setToast] = useState({
    isOpen: false,
    message: '',
    type: '',
  });

  const handleShowToast = (message, type) => {
    setToast({
      isOpen: true,
      message,
      type,
    });

    setTimeout(clearToast, 5000)
  };

  const clearToast = () => {
    setToast({
      ...toast,
      isOpen: false,
      message: '',
    });
  };

  const toastValue = {
    toast,
    handleShowToast: handleShowToast,
  };

  return (
    <ToastContext.Provider value={toastValue}>
      {props.children}
    </ToastContext.Provider>
  );
};

export const useToastContext = () => {
  return useContext(ToastContext);
};
