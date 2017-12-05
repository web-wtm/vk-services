import fetchJsonP from 'fetch-jsonp'
import { call, put, all, takeLatest } from  'redux-saga/effects'

import {
    getPostsSuccess,
    getPostsFail,
    GET_POSTS_REQUEST,

    getPhotosSuccess,
    getPhotosFail,
    GET_PHOTOS_REQUEST,
    GET_PHOTOS_SUCCESS
} from './actions'

let serviceToken = '8a8d04248a8d04248a8d0424458ad0232d88a8d8a8d0424d3d25f2aeea47d69f9bf1d4d';

function* getPosts(action) {
    try {
        const response = yield call(responseHandler, 
            `https://api.vk.com/method/wall.get?domain=${action.payload}&count=100&v=5.65&access_token=${serviceToken}`);

        let posts = response.response.items;
        sortBy(posts, 'likes');

        const data = {
                items: posts.slice(0,20),
                domain: action.payload
            };
        
        yield put(getPostsSuccess(data));
    } catch (err) {
        yield put(getPostsFail(err));
    }
}

function* getPhotos(action) {
    try {
        const response = yield call(responseHandler,
            `https://api.vk.com/method/photos.search?lat=${action.payload.lat}&long=${action.payload.lng}&radius=${action.payload.selectedRadius}&sort=0&v=5.65&access_token=${serviceToken}`);
            
        let photos = response.response.items;
        sortBy(photos, 'date');
        
        yield put(getPhotosSuccess(photos));
    } catch(err) {
        yield put(getPhotosFail(err));
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
}