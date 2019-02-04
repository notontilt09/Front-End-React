import {
    REGISTER_USER_START,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    HANDLE_REGISTER_CHANGES
} from '../actions'

const initialState = {
    isRegistering: false,
    newUser: {
        name: '',
        username: '',
        pw1: '',
        pw2: ''
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