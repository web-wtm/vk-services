import fetchJsonP from 'fetch-jsonp'
import { call, put, all, takeLatest, takeEvery } from  'redux-saga/effects'

import {
    getPostsSuccess,
    getPostsFail,
    GET_POSTS_REQUEST,

    getPhotosSuccess,
    getPhotosFail,
    GET_PHOTOS_REQUEST,

    getUserIdSuccess,
    getUserIdFail,
    GET_USER_ID_REQUEST,

    getMutualRequest,
    getMutualFail,
    GET_MUTUAL_REQUEST,
    GET_USER_ID_SUCCESS,
    getMutualSuccess
} from './actions'

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

function* getPhotos(action) {
    try {
        const response = yield call(responseHandler,
            `${apiUrl}photos.search?lat=${action.payload.lat}&long=${action.payload.lng}&radius=${action.payload.selectedRadius}&sort=0&v=5.65&access_token=${serviceToken}`);
            
        let photos = response.response.items;
        sortBy(photos, 'date');
        
        yield put(getPhotosSuccess(photos));
    } catch(e) {
        yield put(getPhotosFail(e));
    }
}

function* getUserId(action) {
    try {
        const response = yield call(responseHandler,
            `${apiUrl}users.get?user_ids=${action.payload}&v=5.65&access_token=${serviceToken}`)

        yield put(getUserIdSuccess(response.response[0].id))
    } catch (e) {
        yield put(getUserIdFail(e))
    }
}

function* getMutualFriends(action) {
    const params = action.payload;

    try {
        const friendsMutual = yield call(responseHandler, 
            `${apiUrl}friends.getMutual?source_uid=${params.sourceUserId}&target_uid=${params.targetUserId}&v=5.65&access_token=${params.userToken}`);
            
        const friendsInfo = yield call(responseHandler,
            `${apiUrl}users.get?user_ids=${friendsMutual.response.toString()}&fields=${params.fields.toString()}&v=5.65&access_token=${serviceToken}`);
    
        yield put(getMutualSuccess(friendsInfo.response))
    } catch (e) {
        yield put(getMutualFail(e))
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

export default function* main() {
    yield takeLatest(GET_POSTS_REQUEST, getPosts);
    yield takeLatest(GET_PHOTOS_REQUEST, getPhotos);
    yield takeLatest(GET_USER_ID_REQUEST, getUserId);
    yield takeLatest(GET_MUTUAL_REQUEST, getMutualFriends);
}