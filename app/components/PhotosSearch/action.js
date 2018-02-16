export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST';
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS';
export const GET_PHOTOS_FAIL = 'GET_PHOTOS_FAIL';

export const SET_SEARCH_RADIUS = 'SET_SEARCH_RADIUS';

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

// set photoSearchRaduis
export const setSearchRadius = (radius) => {
    return {
        type: SET_SEARCH_RADIUS,
        payload: radius
    }
}