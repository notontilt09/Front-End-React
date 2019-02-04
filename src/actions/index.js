import axios from 'axios'

export const REGISTER_USER_START = 'REGISTER_USER_START'
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL'
export const HANDLE_REGISTER_CHANGES = 'HANDLE_REGISTER_CHANGES'

const baseURL = 'https://guidr-api.herokuapp.com/'

export const handleRegisterChanges = e => {
    return { type: HANDLE_REGISTER_CHANGES, payload: e}
}

export const registerUser = (name, username, password) => dispatch => {
    dispatch({ type: REGISTER_USER_START})
    axios.post(`${baseURL}auth/register`, {name: name, username: username, password: password})
    .then(res => console.log(res))
    .catch(err => console.log(err));
}