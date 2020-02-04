import api from '../utils/api';

export const ADD_START = "ADD_START";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_ERROR = "ADD_ERROR";


export const deleteItems = (item, id) => dispatch => {
        dispatch({ type: ADD_START})

        api()
            .post(`/items/${id}`, item)
            .then(res => {
                dispatch({ type: ADD_SUCCESS, payload: res.data})
                console.log(item)
            })
            .catch(err => {
                dispatch({ type: ADD_ERROR, payload: err.error })
            })
};