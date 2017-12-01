import {
    MAKE_TEST
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
    test: 'start'
}

const setTest = (state, action) => {
    return {
        ...state,
        test: action.payload.test
    }
}

export default createReducer(DEFAULT_STATE, {
    [MAKE_TEST]: setTest
})