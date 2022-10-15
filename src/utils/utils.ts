import {toast} from 'react-toastify'

export const errorNotify = (errorText?: string) => toast.error(errorText || 'Something went wrong');
export const infoNotify = (text?: string) => toast.error(text || 'Something happened');

export const getCurrentTime = (date?: Date) => {
    const localDate = date || new Date()
    return ('0'+localDate.getHours()).slice(-2)+':'+('0'+localDate.getMinutes()).slice(-2)+':'+('0'+localDate.getSeconds()).slice(-2)
}
