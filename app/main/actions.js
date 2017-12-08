export const SET_SELECTED_GROUP = 'SET_SELECTED_GROUP';
export const SET_SEARCH_RADIUS = 'SET_SEARCH_RADIUS';
export const CLEAR_POSTS = 'CLEAR_POSTS'

export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST';
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS';
export const GET_PHOTOS_FAIL = 'GET_PHOTOS_FAIL';

export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAIL = 'GET_POSTS_FAIL'; 

export const GET_USER_ID_REQUEST = 'GET_USER_ID_REQUEST';
export const GET_USER_ID_SUCCESS = 'GET_USER_ID_SUCCESS';
export const GET_USER_ID_FAIL = 'GET_USER_ID_FAIL'; 

export const GET_MUTUAL_REQUEST = 'GET_MUTUAL_REQUEST';
export const GET_MUTUAL_SUCCESS = 'GET_MUTUAL_SUCCESS';
export const GET_MUTUAL_FAIL = 'GET_MUTUAL_FAIL'; 

// set selectedGroup
export const setSelectedGroup = (domain) => {
    return {
        type: SET_SELECTED_GROUP,
        payload: domain
    }
}

// set photoSearchRaduis

export const setSearchRadius = (radius) => {
    return {
        type: SET_SEARCH_RADIUS,
        payload: radius
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


// search photos
export const getPhotosRequest = (params) => {
    return {
        type: GET_PHOTOS_REQUEST,
        payload: params
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

