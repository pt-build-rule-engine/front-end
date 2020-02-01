import {
    GET_START,
    GET_SUCCESS,
    GET_ERROR,
} from "../actions/getContacts";

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
                isLoading: true
            };
        case GET_SUCCESS:
            return {
                ...state,
                items: action.payload,
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