import {
    DELETE_START,
    DELETE_SUCCESS,
    DELETE_ERROR
} from '../Actions/deleteItems';

const initialState = {
    deletedItem: {},
    isLoading: false,
    error: null
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case DELETE_START:
            return {
                ...state,
                isLoading: true, 
                error: null
            };
        case DELETE_SUCCESS: 
            return {
                ...state,
                deletedItem: action.payload,
                isLoading: false
            };
        case DELETE_ERROR: 
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
};