export const mapStateToProps = (state) => {
    return {
        state: state
    }
}

export const createReducer = (initial, handlers) => {
    return (state = initial, action) => {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action)
        } else {
            return state;
        }
    }
}