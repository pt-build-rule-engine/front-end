import {
    ADD_START,
    ADD_SUCCESS,
    ADD_ERROR
} from '../Actions/addContact';

const initialState = {
    addedItem: {
        name: '',
        company: '',
        email: ''
    },
    isLoading: false,
    error: null
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_START:
            return {
                ...state,
                isLoading: true
            };
        case ADD_SUCCESS: 
            return {
                ...state,
                addedItem: action.payload,
                isLoading: false
            };
        case ADD_ERROR: 
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
};