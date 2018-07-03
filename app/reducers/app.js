import APP from '../types/app'

const initialState = {
    isLogin: false
}

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case APP.LOG_IN:
            return { ...state, isLogin: true };

        case APP.LOG_OUT:
            return { ...state, isLogin: false };

        default: 
         return state;
    }
}