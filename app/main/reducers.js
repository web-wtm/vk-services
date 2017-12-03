import {
    MAKE_TEST,
    GET_TEST_REQUEST,
    GET_TEST_SUCCESS,
    GET_TEST_FAIL
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
    loading: false
}

const setTest = (state, action) => {
    return {
        ...state,
        test: action.payload
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

export default createReducer(DEFAULT_STATE, {
    [MAKE_TEST]: setTest,
    [GET_TEST_REQUEST]: setLoading,
    [GET_TEST_SUCCESS]: setId,
    [GET_TEST_FAIL]: setError
})