import {
    GET_START,
    GET_SUCCESS,
    GET_ERROR,
} from "../Actions/getContacts";

const initialState = {
    contacts: [],
    isLoading: false,
    error: null
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_START:
            return {
                ...state,
                isLoading: true, 
                error: null
            };
        case GET_SUCCESS:
            return {
                ...state,
                contacts: [action.payload],
                isLoading: false
            };
        case GET_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
};