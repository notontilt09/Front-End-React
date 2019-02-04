import axios from 'axios'

export const REGISTER_USER_START = 'REGISTER_USER_START';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL';
export const HANDLE_REGISTER_CHANGES = 'HANDLE_REGISTER_CHANGES';
export const HANDLE_LOGIN_CHANGES = 'HANDLE_LOGIN_CHANGES';
export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';
export const GET_TRIPS_START = 'GET_TRIPS_START';
export const GET_TRIPS_SUCCESS = 'GET_TRIPS_SUCCESS';
export const GET_TRIPS_FAIL = 'GET_TRIPS_FAIL';


const baseURL = 'https://guidr-api.herokuapp.com'

export const handleRegisterChanges = e => {
    return { type: HANDLE_REGISTER_CHANGES, payload: e }
}

export const handleLoginChanges = e => {
    return { type: HANDLE_LOGIN_CHANGES, payload: e }
}

export const registerUser = (name, username, password) => dispatch => {
    dispatch({ type: REGISTER_USER_START})
    axios.post(`${baseURL}/auth/register`, {name: name, username: username, password: password})
    .then(res => {
        dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data})
        localStorage.setItem('token', res.data.token)
    })
    .catch(err => dispatch({ type: REGISTER_USER_FAIL, payload: err}))
}

export const loginUser = (username, password) => dispatch => {
    dispatch({type: LOGIN_USER_START })
    axios.post(`${baseURL}/auth/login`, {username: username, password: password})
    .then(res => {
        dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data });
        localStorage.setItem('token', res.data.token)
    })
    .catch(err => dispatch({ type: LOGIN_USER_FAIL, payload: err }))
}

export const getTrips = guideId => dispatch => {
    const token = localStorage.getItem('token');
    const options = {
        headers: {
            Authorization: token,
        },
    }
    dispatch({ type: GET_TRIPS_START})
    axios.get(`${baseURL}/user/${guideId}/all`, options)
        .then(res => console.log(res))
}