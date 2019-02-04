import {
    REGISTER_USER_START,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    HANDLE_REGISTER_CHANGES,
    HANDLE_LOGIN_CHANGES
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
    }
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
        default: 
            return state
    }
}

export default reducer