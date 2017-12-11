export const GET_MUTUAL_REQUEST = 'GET_MUTUAL_REQUEST';
export const GET_MUTUAL_SUCCESS = 'GET_MUTUAL_SUCCESS';
export const GET_MUTUAL_FAIL = 'GET_MUTUAL_FAIL'; 

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
