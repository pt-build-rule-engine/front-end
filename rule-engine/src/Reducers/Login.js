import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
} from "../Actions/Login";


const initialState = {
    user: {
        email: '',
        password: ''
    },
    isLoading: false,
    error: null
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_START:
            return {
            ...state,
            isLoading: true,
            error: null
            };
        case LOGIN_SUCCESS:
            return {
            ...state,
            user: action.payload,
            isLoading: false
            };
        case LOGIN_ERROR:
            return {
            ...state,
            error: action.payload,
            isLoading: false
            };
        default:
            return state;
    }
};