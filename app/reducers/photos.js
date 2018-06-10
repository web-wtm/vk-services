import API from '../types/api'

const initialState = {
    foundPhotos: null,
    isLoading: false,
    isError: false,
    errors: null
}

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case API.GET_PHOTOS_FETCH:
            return { ...state, isLoading: true };

        case API.GET_PHOTOS_SUCCESS:
            return {
                ...state,
                foundPhotos: payload,
                isLoading: false,
                isError: false,
                errors: null
            };
        
        case API.GET_PHOTOS_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true,
                errors: payload
            };

        default: 
            return state;
    }
}