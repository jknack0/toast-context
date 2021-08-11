import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { Alert } from '@material-ui/lab';
import { useToastContext } from '../ToastContext';

const Toast = () => {
  const { toast } = useToastContext();

  return (
    <Snackbar open={!!toast.message}>
      <Alert severity={toast.type}>{toast.message}</Alert>
    </Snackbar>
  );
};

export default Toast;
