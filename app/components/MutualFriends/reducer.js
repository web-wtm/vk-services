export const setUserId = (state, action) => {
    return {
        ...state,
        userId: action.payload
    }
}

export const setMutualFriends = (state, action) => {
    return {
        ...state,
        mutualFriends: action.payload
    }
}