import fetchJsonP from 'fetch-jsonp'
import { call, put, all, takeLatest, takeEvery, fork } from  'redux-saga/effects'

import {
    getUserIdSuccess,
    getUserIdFail,
    GET_USER_ID_REQUEST
} from '../actions/getUserId'

import {
    getMutualSuccess,
    getMutualFail,
    GET_MUTUAL_REQUEST
} from '../actions/mutualFriends'

import {
    GET_POSTS_REQUEST
} from '../actions/topPosts'

import getPosts from '../../components/TopPosts/saga'
import getPhotos from '../../components/PhotosSearch/saga'

const serviceToken = '8a8d04248a8d04248a8d0424458ad0232d88a8d8a8d0424d3d25f2aeea47d69f9bf1d4d',
      apiUrl = 'https://api.vk.com/method/';


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
    yield [
        fork(getPosts),
        fork(getPhotos)
    ]
    // yield takeLatest(GET_PHOTOS_REQUEST, getPhotos);
    // yield takeLatest(GET_USER_ID_REQUEST, getUserId);
    // yield takeLatest(GET_MUTUAL_REQUEST, getMutualFriends);
}