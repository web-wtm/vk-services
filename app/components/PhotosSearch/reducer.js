export const setSearchRadius = (state, action) => {
    return {
        ...state,
        photoSearchRadius: action.payload
    }
}

export const clearPhotos = (state) => {
    return {
        ...state,
        photos: null
    }
}

export const setPhotos = (state, action) => {
    return {
        ...state,
        photos: action.payload,
        loading: false
    }
}