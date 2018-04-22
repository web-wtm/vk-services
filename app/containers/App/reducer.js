import { setPhotos, setSearchRadius } from '../Photos/reducer'
import {
    GET_PHOTOS_REQUEST,
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_FAIL,

    SET_SEARCH_RADIUS
} from '../Photos/action'

import { setSelectedGroup, setPosts, clearPosts } from '../Posts/reducer'
import {
    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAIL,

    SET_SELECTED_GROUP,
    CLEAR_POSTS
} from '../Posts/action'

import { setUserId, setMutualFriends } from '../Friends/reducer'
import {
    GET_MUTUAL_REQUEST,
    GET_MUTUAL_SUCCESS,
    GET_MUTUAL_FAIL,

    GET_USER_ID_REQUEST,
    GET_USER_ID_SUCCESS,
    GET_USER_ID_FAIL
} from '../Friends/action'

import { setLoggedStatus } from '../Home/reducer'
import { LOG_IN, LOG_OUT } from '../Home/action'

import { createReducer } from '../../utils/helpers'

const DEFAULT_STATE = {
    isLogged: false,
    selectedGroup: 'fuck_humor',
    photoSearchRadius: 10,
    posts: null,
    photos: null,
    mutualFriends: null,
    userId: null,
    loading: false,
    error: false
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

export default createReducer(DEFAULT_STATE, {
    [SET_SEARCH_RADIUS]: setSearchRadius,
    [GET_PHOTOS_REQUEST]: setLoading,
    [GET_PHOTOS_SUCCESS]: setPhotos,
    [GET_PHOTOS_FAIL]: setError,
    
    [SET_SELECTED_GROUP]: setSelectedGroup,
    [GET_POSTS_REQUEST]: setLoading,
    [GET_POSTS_SUCCESS]: setPosts,
    [GET_POSTS_FAIL]: setError,
    [CLEAR_POSTS]: clearPosts,

    [GET_USER_ID_REQUEST]: setLoading,
    [GET_USER_ID_SUCCESS]: setUserId,
    [GET_USER_ID_FAIL]: setError,

    [GET_MUTUAL_REQUEST]: setLoading,
    [GET_MUTUAL_SUCCESS]: setMutualFriends,
    [GET_MUTUAL_FAIL]: setError,

    [LOG_IN]: setLoggedStatus,
    [LOG_OUT]: setLoggedStatus
})