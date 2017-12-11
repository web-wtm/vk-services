export const SET_SEARCH_RADIUS = 'SET_SEARCH_RADIUS';

// set photoSearchRaduis
export const setSearchRadius = (radius) => {
    return {
        type: SET_SEARCH_RADIUS,
        payload: radius
    }
}