export const GET_USER_ID_REQUEST = 'GET_USER_ID_REQUEST';
export const GET_USER_ID_SUCCESS = 'GET_USER_ID_SUCCESS';
export const GET_USER_ID_FAIL = 'GET_USER_ID_FAIL'; 

export const GET_MUTUAL_REQUEST = 'GET_MUTUAL_REQUEST';
export const GET_MUTUAL_SUCCESS = 'GET_MUTUAL_SUCCESS';
export const GET_MUTUAL_FAIL = 'GET_MUTUAL_FAIL'; 

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

// get mutual friends
export const getMutualRequest = (params) => {
    return {
        type: GET_MUTUAL_REQUEST,
        payload: params
    }
}

export const getMutualSuccess = (response) => {
    return {
        type: GET_MUTUAL_SUCCESS,
        payload: response
    }
}

export const getMutualFail = (error) => {
    return {
        type: GET_MUTUAL_FAIL,
        payload: error
    }
}
