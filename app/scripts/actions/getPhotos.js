export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST';
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS';
export const GET_PHOTOS_FAIL = 'GET_PHOTOS_FAIL';

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