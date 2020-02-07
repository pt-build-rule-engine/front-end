import api from "../Utls/api";


export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";

export const signup = (credentials) => dispatch => {

    dispatch({ type: SIGNUP_START });

    api().post("/api/auth/register", credentials)
        .then(res => {
            dispatch({ type: SIGNUP_SUCCESS, payload: res.data })
        })
        .catch(err =>{
            dispatch({ type: SIGNUP_ERROR, payload: err.error })
        })
};