import {toast} from 'react-toastify';

export const ToastError = error => {
    let message = null;
    if(typeof error === 'object' && error.hasOwnProperty('message')){
        message = error.message;
    }
    if(message !== null & typeof message !== 'undefined' && message !== '' ) {
        toast.error(message);
    };
}