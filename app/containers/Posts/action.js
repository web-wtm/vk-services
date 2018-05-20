export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAIL = 'GET_POSTS_FAIL'; 

export const CLEAR_POSTS = 'CLEAR_POSTS';
export const SET_SELECTED_GROUP = 'SET_SELECTED_GROUP';

// clear posts
export const clearPosts = () => {
    return {
        type: CLEAR_POSTS
    }
}

// set selectedGroup
export const setSelectedGroup = (path) => {
    return {
        type: SET_SELECTED_GROUP,
        payload: path
    }
}

// top posts
export const getPostsRequest = (path) => {
    return {
        type: GET_POSTS_REQUEST,
        payload: path
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