import API from '../types/api'

const initialState = {
    selectedGroup: 'fuck_humor',
    groupPosts: null,
    isLoading: false,
    isError: false,
    errors: null
}

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case API.GET_POSTS_FETCH:
            return {
                ...state,
                selectedGroup: payload.domain,
                isLoading: true
            };

        case API.GET_POSTS_SUCCESS:
            return {
                ...state,
                groupPosts: payload,
                isLoading: false,
                isError: false,
                errors: null
            };

        case API.GET_POSTS_ERROR:
            return {
                isLoading: false,
                isError: true,
                errors: payload
            };

        default:
            return state;
    }
}