export const GET_USER_ID_REQUEST = 'GET_USER_ID_REQUEST';
export const GET_USER_ID_SUCCESS = 'GET_USER_ID_SUCCESS';
export const GET_USER_ID_FAIL = 'GET_USER_ID_FAIL'; 

// get user id
export const getUserIdRequest = (uid) => {
    return {
        type: GET_USER_ID_REQUEST,
        payload: uid
    }
}

export const getUserIdSuccess = (response) => {
    return {
        type: GET_USER_ID_SUCCESS,
        payload: response
    }
}

export const getUserIdFail = (error) => {
    return {
        type: GET_USER_ID_FAIL,
        payload: error
    }
}