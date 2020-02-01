import {
    DELETE_ITEMS_START,
    DELETE_ITEMS_SUCCESS,
    DELETE_ITEMS_ERROR
} from '../actions/deleteItems';

const initialState = {
    deletedItem: {},
    isLoading: false,
    error: null
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case DELETE_ITEMS_START:
            return {
                ...state,
                isLoading: true
            };
        case DELETE_ITEMS_SUCCESS: 
            return {
                ...state,
                deletedItem: action.payload,
                isLoading: false
            };
        case DELETE_ITEMS_ERROR: 
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
    }
};