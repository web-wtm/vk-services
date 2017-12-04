import fetchJsonP from 'fetch-jsonp'
import { call, put, all, takeLatest } from  'redux-saga/effects'

import {
    GET_TEST_REQUEST,
    getTestRequest,
    getTestSuccess,
    getTestFail,
    getPostsRequest,
    getPostsSuccess,
    getPostsFail,
    GET_POSTS_REQUEST
} from './actions'

let serviceToken = '8a8d04248a8d04248a8d0424458ad0232d88a8d8a8d0424d3d25f2aeea47d69f9bf1d4d';

function responseHandler(url) {
    return fetchJsonP(url)
        .then((response) => response.json())
}

function sortByLikes(arr) {
    arr.sort((a,b) => {
        return a.likes.count === b.likes.count ? 0 : a.likes.count < b.likes.count ? 1 : -1;
    })
}

function* getTest(action) {
    try {
        const data = yield call(responseHandler, 
            'https://api.vk.com/method/users.get?user_ids=t7490w743m&v=5.65')
        
        yield put(getTestSuccess(data.response[0].id));
    } catch(err) {
        yield put(getTestFail(err));
    }
}

function* getPosts(action) {
    try {
        const response = yield call(responseHandler, 
            `https://api.vk.com/method/wall.get?domain=${action.payload}&count=100&v=5.65&access_token=${serviceToken}`);

        var items = response.response.items;
        sortByLikes(items);
        const data = {
                items: items.slice(0,20),
                domain: action.payload
            };
        
        yield put(getPostsSuccess(data));
    } catch (err) {
        yield put(getPostsFail(err))
    }
}
export default function* main() {
    yield takeLatest(GET_TEST_REQUEST, getTest)
    yield takeLatest(GET_POSTS_REQUEST, getPosts)
}