import {
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR
} from "../Actions/SignUp";

const initialState = {
    newUser: {
        name: '',
        company: '',
        email: '',
        phoneNumber: '',
        password: ''
    },
    isLoading: false,
    error: null
};


export function reducer(state = initialState, action) {
    switch (action.type) {
        case SIGNUP_START:
            return {
            ...state,
            isLoading: true, 
            error: null
            };
        case SIGNUP_SUCCESS:
            return {
            ...state,
            newUser: action.payload,
            isLoading: false
            };
        case SIGNUP_ERROR:
            return {
            ...state,
            error: action.payload,
            isLoading: false
            }
        default:
            return state;
    }
};