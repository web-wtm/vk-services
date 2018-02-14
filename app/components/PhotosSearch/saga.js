import fetchJsonP from 'fetch-jsonp'
import { call, put, takeLatest } from  'redux-saga/effects'

import {
    getPhotosSuccess,
    getPhotosFail,
    GET_PHOTOS_REQUEST
} from '../../scripts/actions/getPhotos'

const serviceToken = '8a8d04248a8d04248a8d0424458ad0232d88a8d8a8d0424d3d25f2aeea47d69f9bf1d4d',
      apiUrl = 'https://api.vk.com/method/';

function* getPhotos(action) {
    try {
        const response = yield call(responseHandler,
            `${apiUrl}photos.search?lat=${action.payload.lat}&long=${action.payload.lng}&radius=${action.payload.selectedRadius}&sort=0&v=5.65&access_token=${serviceToken}`);
            
        console.log('+')
        let photos = response.response.items;
        sortBy(photos, 'date');
        yield put(getPhotosSuccess(photos));
    } catch(e) {
        yield put(getPhotosFail(e));
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
    yield takeLatest(GET_PHOTOS_REQUEST, getPhotos);
}