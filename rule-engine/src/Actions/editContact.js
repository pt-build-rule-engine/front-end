import api from '../Utls/api';

export const EDIT_START = "EDIT_START"
export const EDIT_SUCCESS = "EDIT_SUCCESS"
export const EDIT_ERROR = "EDIT_ERROR"

export const editContact = (id, editedItem) => dispatch => {
    dispatch({ type: EDIT_START });

    api().put(`/api/contacts/${id}`, editedItem)
    .then(res => {
        dispatch({ type: EDIT_SUCCESS, payload: res.data })
        console.log(res.data)
    })
    .catch(err => {
        dispatch({ type: EDIT_ERROR, payload: err })
    })
};