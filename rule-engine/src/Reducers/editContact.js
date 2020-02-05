import {
    EDIT_START,
    EDIT_SUCCESS,
    EDIT_ERROR
} from "../actions/editContact";

const initialState = {
    editedItem: {
        email: '',
        company: '',
        name: ''
    },
    isLoading: false,
    error: null
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case EDIT_START:
            return {
                ...state,
                isLoading: true, 
                error: null
            };
        case EDIT_SUCCESS:
            return {
                ...state,
                editedItem: action.payload,
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