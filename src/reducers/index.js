import {
    REGISTER_USER_START,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    HANDLE_REGISTER_CHANGES,
    HANDLE_LOGIN_CHANGES,
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGOUT,
    GET_TRIPS_START,
    GET_TRIPS_SUCCESS,
    GET_TRIPS_FAIL
} from '../actions'

const initialState = {
    isRegistering: false,
    isLoggingIn: false,
    newUser: {
        name: '',
        username: '',
        pw1: '',
        pw2: ''
    },
    user: {
        username: '',
        password: ''
    },
    isLoggedIn: false,
    fetchingTrips: false,
    trips: []
};

const reducer = (state = initialState, action) =>{
    switch(action.type) {
        case HANDLE_REGISTER_CHANGES:
            return {
                ...state,
                newUser: {
                    ...state.newUser,
                    [action.payload.target.name]: action.payload.target.value
                }
            }
        case HANDLE_LOGIN_CHANGES:
            return {
                ...state,
                user: {
                    ...state.user,
                    [action.payload.target.name]: action.payload.target.value
                }
            }
        case REGISTER_USER_START:
            return {
                ...state,
                isRegistering: true
            }
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                isRegistering: false,
                isLoggedIn: true,
            }
        case REGISTER_USER_FAIL:
            return {
                ...state,
                isRegistering: false
            }
        case LOGIN_USER_START:
            return {
                ...state,
                isLoggingIn: true
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: true,
            }
        case LOGIN_USER_FAIL:
            return {
                ...state,
                isLoggingIn: false
            }
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                newUser: {
                    name: '',
                    username: '',
                    pw1: '',
                    pw2: ''
                },
                user: {
                    username: '',
                    password: ''
                }
            }
        case GET_TRIPS_START:
            return {
                ...state,
                fetchingTrips: true
            }
        case GET_TRIPS_SUCCESS: 
            return {
                ...state,
                trips: action.payload,
                fetchingTrips: false
            }
        case GET_TRIPS_FAIL:
            return {
                ...state,
                fetchingTrips: false

            }
        default: 
            return state
    }
}

export default reducer