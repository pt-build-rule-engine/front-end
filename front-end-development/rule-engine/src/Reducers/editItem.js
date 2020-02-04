import {
    EDIT_START,
    EDIT_SUCCESS,
    EDIT_ERROR
} from "../actions/editItem";

const initialState = {
    contactInfo: {
        
    },
    isLoading: false,
    error: null
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case EDIT_START:
            return {
                ...state,
                isLoading: true
            };
        case EDIT_SUCCESS:
            return {
                ...state,
                contactInfo: action.payload,
                isLoading: false
            };
    case EDIT_ERROR:
        return {
            ...state,
            error: action.payload,
            isLoading: false
        }
    default:
        return state
    }
};