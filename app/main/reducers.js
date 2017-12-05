import {
    SET_SELECTED_GROUP,
    CLEAR_POSTS,
    
    GET_PHOTOS_REQUEST,
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_FAIL,

    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAIL
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
    posts: null,
    photos: null,
    loading: false,
    error: false
}

const setSelectedGroup = (state, action) => {
    return {
        ...state,
        selectedGroup: action.payload
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
        loading: true
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

export default createReducer(DEFAULT_STATE, {
    [SET_SELECTED_GROUP]: setSelectedGroup,

    [GET_PHOTOS_REQUEST]: setLoading,
    [GET_PHOTOS_SUCCESS]: setPhotos,
    [GET_PHOTOS_FAIL]: setError,

    [GET_POSTS_REQUEST]: setLoading,
    [GET_POSTS_SUCCESS]: setPosts,
    [GET_POSTS_FAIL]: setError,
    [CLEAR_POSTS]: clearPosts
})