import api from '../Utls/api';

export const GET_START = "GET_START";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_ERROR = "GET_ERROR";

export const getContacts = () => dispatch => {

    dispatch({ type: GET_START });

    api().get("/api/contacts")
        .then(res => {
            console.log('from reducer: ', res.data)
            dispatch({ type: GET_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: GET_ERROR, payload: err.error });
        })
};
