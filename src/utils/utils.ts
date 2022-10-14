import {toast} from 'react-toastify'

export const errorNotify = (errorText?: string) => toast.error(errorText || 'Something went wrong');
