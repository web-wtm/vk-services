import {
    SET_SELECTED_GROUP,
    SET_SEARCH_RADIUS,
    CLEAR_POSTS,
    
    GET_PHOTOS_REQUEST,
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_FAIL,

    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAIL,

    GET_USER_ID_REQUEST,
    GET_USER_ID_SUCCESS,
    GET_USER_ID_FAIL,

    GET_MUTUAL_REQUEST,
    GET_MUTUAL_SUCCESS,
    GET_MUTUAL_FAIL
} from './actions'

const createReducer = (initial, handlers) => {
    return (state = initial, action) => {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action)
        } else {
            return state;
        }
    }
}

const DEFAULT_STATE = {
    selectedGroup: 'fuck_humor',
    photoSearchRadius: 10,
    posts: null,
    photos: null,
    mutualFriends: null,
    userId: null,
    loading: false,
    error: false
}

const setSelectedGroup = (state, action) => {
    return {
        ...state,
        selectedGroup: action.payload
    }
}

const setSearchRadius = (state, action) => {
    return {
        ...state,
        photoSearchRadius: action.payload
    }
}

const clearPosts = (state) => {
    return {
        ...state,
        posts: null
    }
}

const setPhotos = (state, action) => {
    return {
        ...state,
        photos: action.payload,
        loading: false
    }
}

const setLoading = (state, acrtion) => {
    return {
        ...state,
        loading: true,
        error: false
    }
}

const setError = (state, action) => {
    return {
        ...state,
        error: action.payload,
        loading: false
    }
}

const setPosts = (state, action) => {
    return {
        ...state,
        posts: action.payload.items,
        selectedGroup: action.payload.domain,
        loading: false
    }
}

const setUserId = (state, action) => {
    return {
        ...state,
        userId: action.payload
    }
}

const setMutualFriends = (state, action) => {
    return {
        ...state,
        mutualFriends: action.payload
    }
}

export default createReducer(DEFAULT_STATE, {
    [SET_SELECTED_GROUP]: setSelectedGroup,
    [SET_SEARCH_RADIUS]: setSearchRadius,

    [GET_PHOTOS_REQUEST]: setLoading,
    [GET_PHOTOS_SUCCESS]: setPhotos,
    [GET_PHOTOS_FAIL]: setError,

    [GET_POSTS_REQUEST]: setLoading,
    [GET_POSTS_SUCCESS]: setPosts,
    [GET_POSTS_FAIL]: setError,
    [CLEAR_POSTS]: clearPosts,

    [GET_USER_ID_REQUEST]: setLoading,
    [GET_USER_ID_SUCCESS]: setUserId,
    [GET_USER_ID_FAIL]: setError,

    [GET_MUTUAL_REQUEST]: setLoading,
    [GET_MUTUAL_SUCCESS]: setMutualFriends,
    [GET_MUTUAL_FAIL]: setError
})