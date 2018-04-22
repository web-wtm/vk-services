import fetchJsonP from 'fetch-jsonp'
import { call, put, takeLatest } from  'redux-saga/effects'
import { responseHandler, sortBy, serviceToken, apiUrl } from '../../utils/helpers'
import {
    getPhotosSuccess,
    getPhotosFail,
    GET_PHOTOS_REQUEST
} from './action'

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

export default function* () {
    yield takeLatest(GET_PHOTOS_REQUEST, getPhotos);
}