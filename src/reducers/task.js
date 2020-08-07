import * as taskConstants from './../constants/task';
import * as abc from './../helpers/toastHelper';
const initialState = {
    listTask: []
};

const ToastError = abc.ToastError;

const taskReducer = (state = initialState, action) => {
    switch(action.type) {
        case taskConstants.FETCH_TASK: {
            return {
                ...state,
                listTask: []
            };
        }
        case taskConstants.FETCH_TASK_SUCESS: {
            console.log(action.payload, ': action.payload');
            //  const {data: {data}} = action.payload
            return {
                ...state,
                listTask: action.payload.data.data
            };
        }
        case taskConstants.FETCH_TASK_FAIL: {
            const {error} = action.payload;
            ToastError(error);
            return {
                ...state,
                listTask: []
            };
        }
            
        default:
            return state;
    }
}

export default taskReducer;