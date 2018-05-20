export const setSelectedGroup = (state, action) => {
    return {
        ...state,
        selectedGroup: action.payload
    }
}

export const clearPosts = (state) => {
    return {
        ...state,
        posts: null
    }
}

export const setPosts = (state, action) => {
    return {
        ...state,
        posts: action.payload.items,
        selectedGroup: action.payload.path,
        loading: false
    }
}