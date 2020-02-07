import api from '../Utls/api';

export const ADD_START = "ADD_START";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_ERROR = "ADD_ERROR";


export const addContact = (newContact) => dispatch => {
        dispatch({ type: ADD_START})

        api()
            .post(`/api/contacts`, newContact)
            .then(res => {
                dispatch({ type: ADD_SUCCESS})
                // dispatch({ type: ADD_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({ type: ADD_ERROR, payload: err.response })
            })
};