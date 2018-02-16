export const setSearchRadius = (state, action) => {
    return {
        ...state,
        photoSearchRadius: action.payload
    }
}

export const setPhotos = (state, action) => {
    return {
        ...state,
        photos: action.payload,
        loading: false
    }
}