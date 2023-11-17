import { toast } from 'react-toastify';

export const toastSuccess = (text: string) => {
  toast.success(text, { position : 'bottom-right'});
}

export const toastWarn = (text: string) => {
  toast.warn(text, { position : 'bottom-right'});
}

export const toastError = (text: string) => {
  toast.error(text, { position : 'top-right'});
}