import api from '../Utls/api';

export const DELETE_START = "DELETE_START";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_ERROR = "DELETE_ERROR";


export const deleteContact = (id) => dispatch => {
        console.log('from action: ', id)
        dispatch({ type: DELETE_START })

        api()
            .delete(`/api/contacts/${id}`)
            .then(res => {
                dispatch({ type: DELETE_SUCCESS })
            })
            .catch(err => {
                dispatch({ type: DELETE_ERROR, payload: err.error })
            })
};