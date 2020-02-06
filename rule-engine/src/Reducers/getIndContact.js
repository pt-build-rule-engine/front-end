import {
    GET_IND_START,
    GET_IND_SUCCESS,
    GET_IND_ERROR,
} from "../Actions/getIndContact";

const initialState = {
    indContact: {},
    isLoading: false,
    error: null
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_IND_START:
            return {
                ...state,
                isLoading: true, 
                error: null
            };
        case GET_IND_SUCCESS:
            return {
                ...state,
                contact: action.payload,
                isLoading: false
            };
        case GET_IND_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
};