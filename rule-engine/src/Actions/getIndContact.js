import api from "../utils/api"

export const GET_IND_START = "GET_IND_START";
export const GET_IND_SUCCESS = "GET_IND_SUCCESS";
export const GET_IND_ERROR = "GET_IND_ERROR";

export const getIndContact = (id) => dispatch => {

    dispatch({ type: GET_IND_START });

    api().get(`/api/contacts/${id}`)
        .then(res => {
            dispatch({ type: GET_IND_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: GET_IND_ERROR, payload: err.error });
        })
};
