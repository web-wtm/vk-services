export const SET_SELECTED_GROUP = 'SET_SELECTED_GROUP';
export const CLEAR_POSTS = 'CLEAR_POSTS'

export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST';
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS';
export const GET_PHOTOS_FAIL = 'GET_PHOTOS_FAIL';

export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAIL = 'GET_POSTS_FAIL'; 

// set selectedGroup
export const setSelectedGroup = (domain) => {
    return {
        type: SET_SELECTED_GROUP,
        payload: domain
    }
}

// clear posts
export const clearPosts = () => {
    return {
        type: CLEAR_POSTS
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


// photos request
export const getPhotosRequest = (query) => {
    return {
        type: GET_PHOTOS_REQUEST,
        payload: query
    }
}

export const getPhotosSuccess = (response) => {
    return {
        type: GET_PHOTOS_SUCCESS,
        payload: response
    }
}

export const getPhotosFail = (error) => {
    return {
        type: GET_PHOTOS_FAIL,
        payload: error
    }
}