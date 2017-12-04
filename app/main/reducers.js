import {
    SET_SELECTED_GROUP,
    GET_TEST_REQUEST,
    GET_TEST_SUCCESS,
    GET_TEST_FAIL,
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
    test: 'start',
    loading: false,
    selectedGroup: 'fuck_humor',
    searchGroup: '',
    posts: null,
    error: false
}

const setSelectedGroup = (state, action) => {
    return {
        ...state,
        searchGroup: action.payload
    }
}

const setId = (state, action) => {
    return {
        ...state,
        id: action.payload,
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
        error: action.payload
    }
}

const setPosts = (state, action) => {
    return {
        ...state,
        posts: action.payload.items,
        selectedGroup: action.payload.domain
    }
}

export default createReducer(DEFAULT_STATE, {
    [SET_SELECTED_GROUP]: setSelectedGroup,
    [GET_TEST_REQUEST]: setLoading,
    [GET_TEST_SUCCESS]: setId,
    [GET_TEST_FAIL]: setError,
    [GET_POSTS_REQUEST]: setLoading,
    [GET_POSTS_SUCCESS]: setPosts,
    [GET_POSTS_FAIL]: setError
})