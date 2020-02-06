import api from '../Utls/api';

export const DELETE_START = "DELETE_START";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_ERROR = "DELETE_ERROR";


export const deleteContact = (item, id) => dispatch => {
        dispatch({ type: DELETE_START })

        api()
            .delete(`/items/${id}`, item)
            .then(res => {
                dispatch({ type: DELETE_SUCCESS, payload: res.data})
                console.log(item)
            })
            .catch(err => {
                dispatch({ type: DELETE_ERROR, payload: err.error })
            })
};