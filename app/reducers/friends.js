import API from '../types/api'

const initialState = {
    mutualFriendsId: null,
    userIds: null,
    isLoading: false,
    isError: false,
    errors: null
}

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case API.GET_USER_ID_SUCCESS:
            return {
                ...state,
                userIds: payload,
                isLoading: false,
                isError: false,
                errors: null
            };
            
        case API.GET_MUTUAL_FRIENDS_SUCCESS:
            return {
                ...state,
                mutualFriendsId: payload,
                isLoading: false,
                isError: false,
                errors: null
            };

        case API.GET_USER_ID_FETCH: 
        case API.GET_MUTUAL_FRIENDS_FETCH:
            return { ...state, isLoading: true };


        case API.GET_USER_ID_ERROR:
        case API.GET_MUTUAL_FRIENDS_ERROR:
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