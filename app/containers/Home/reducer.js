export const setLoggedStatus = (state, action) => {
    return {
        ...state,
        isLogged: action.payload
    }
}