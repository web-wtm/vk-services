export const SET_SELECTED_GROUP = 'SET_SELECTED_GROUP';

export const GET_TEST_REQUEST = 'GET_TEST_REQUEST';
export const GET_TEST_SUCCESS = 'GET_TEST_SUCCESS';
export const GET_TEST_FAIL = 'GET_TEST_FAIL';

export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAIL = 'GET_POSTS_FAIL'; 

// set selectedGroup
export const setSelectedGroup = (domain) => {
    console.log(domain)
    return {
        type: SET_SELECTED_GROUP,
        payload: domain
    }
}

// test request
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

// top posts
export const getPostsRequest = (domain) => {
    return {
        type: GET_POSTS_REQUEST,
        payload: domain
    }
}

export const getPostsSuccess = (posts) => {
    return {
        type: GET_POSTS_SUCCESS,
        payload: posts
    }
}

export const getPostsFail = (error) => {
    return {
        type: GET_POSTS_FAIL,
        payload: error
    }
}