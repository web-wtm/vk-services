import fetchJsonP from 'fetch-jsonp'

export const serviceToken = '8a8d04248a8d04248a8d0424458ad0232d88a8d8a8d0424d3d25f2aeea47d69f9bf1d4d';
export const apiUrl = 'https://api.vk.com/method/';

export function responseHandler(url) {
    return fetchJsonP(url)
        .then((response) => response.json())
}

export function sortBy(arr, key) {
    arr.sort((a,b) => {
        return a[key].count === b[key].count ? 0 : a[key].count < b[key].count ? 1 : -1;
    })
}

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