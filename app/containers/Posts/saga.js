import fetchJsonP from 'fetch-jsonp'
import { call, put, takeLatest } from 'redux-saga/effects'

import { responseHandler, sortBy, serviceToken, apiUrl } from '../../utils/helpers'
import {
    getPostsSuccess,
    getPostsFail,
    GET_POSTS_REQUEST
} from './action'

function* getPosts(action) {
    try {
        const response = yield call(responseHandler, 
            `${apiUrl}wall.get?domain=${action.payload}&count=100&v=5.65&access_token=${serviceToken}`);

        let posts = response.response.items.slice(0,20);

        const data = {
            items: posts,
            path: action.payload
        };
        
        yield put(getPostsSuccess(data));
    } catch (e) {
        yield put(getPostsFail(e));
    }
}

export default function* () {
    yield takeLatest(GET_POSTS_REQUEST, getPosts);
}