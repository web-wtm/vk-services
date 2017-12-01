export const MAKE_TEST = 'MAKE_TEST';

export const GET_TEST_REQUEST = 'GET_TEST_REQUEST';
export const GET_TEST_SUCCESS = 'GET_TEST_SUCCESS';
export const GET_TEST_FAIL = 'GET_TEST_FAIL';


export const makeTest = (value) => {
    return {
        type: MAKE_TEST,
        payload: value
    }
}

export const getTestRequest = (query) => {
    return {
        type: GET_TEST_REQUEST,
        payload: query
    }
}

export const getTestSuccess = (response) => {
    return {
        type: GET_TEST_SUCCESS,
        payload: response
    }
}

export const getTestFail = (error) => {
    return {
        type: GET_TEST_FAIL,
        payload: error
    }
}
