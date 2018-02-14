import fetchJsonP from 'fetch-jsonp'
import { call, put, takeLatest } from 'redux-saga/effects'

import {
    getPostsSuccess,
    getPostsFail,
    GET_POSTS_REQUEST
} from '../../scripts/actions/topPosts'
const serviceToken = '8a8d04248a8d04248a8d0424458ad0232d88a8d8a8d0424d3d25f2aeea47d69f9bf1d4d',
      apiUrl = 'https://api.vk.com/method/';
function* getPosts(action) {
    try {
        const response = yield call(responseHandler, 
            `${apiUrl}wall.get?domain=${action.payload}&count=100&v=5.65&access_token=${serviceToken}`);

        let posts = response.response.items;
        sortBy(posts, 'likes');

        const data = {
                items: posts.slice(0,20),
                domain: action.payload
            };
        
        yield put(getPostsSuccess(data));
    } catch (e) {
        yield put(getPostsFail(e));
    }
}

function responseHandler(url) {
    return fetchJsonP(url)
        .then((response) => response.json())
}

function sortBy(arr, key) {
    arr.sort((a,b) => {
        return a[key].count === b[key].count ? 0 : a[key].count < b[key].count ? 1 : -1;
    })
}

export default function* () {
    yield takeLatest(GET_POSTS_REQUEST, getPosts);
}