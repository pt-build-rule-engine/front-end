import api from '../Utls/api';

export const EDIT_START = "EDIT_START"
export const EDIT_SUCCESS = "EDIT_SUCCESS"
export const EDIT_ERROR = "EDIT_ERROR"

export const editItem = (updatedInfo) => dispatch => {
    dispatch({ type: EDIT_START });

    api().put(`/users/${localStorage.getItem("user_id")}`, updatedInfo)
    .then(res => {
        dispatch({ type: EDIT_SUCCESS, payload: res.data })
        console.log(res.data)
    })
    .catch(err => {
        dispatch({ type: EDIT_ERROR, payload: err })
    })
};