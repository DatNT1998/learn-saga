import * as taskApis from './../apis/task';
import * as taskConstants from './../constants/task';

export const fetchListTask = () => {
    return {
        type: taskConstants.FETCH_TASK
    }
}

export const fetchListTaskSuccess = (data) => {
    return {
        type: taskConstants.FETCH_TASK_SUCESS,
        payload: {
            data,
        }
    }
}

export const fetchListTaskFail = (error) => {
    return {
        type: taskConstants.FETCH_TASK_FAIL,
        payload: {
            error
        }
    }
}

export const fetchListTaskRequest = () => {
    return dispatch => {
        dispatch(fetchListTask());
        taskApis.getList()
            .then(res => {
                //  const {data} = res.data
                dispatch(fetchListTaskSuccess(res));
            })
            .catch(error => {
                dispatch(fetchListTaskFail(error));
            });
    };
}