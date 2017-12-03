import fetchJsonP from 'fetch-jsonp'
import { call, put, all, takeLatest } from  'redux-saga/effects'

import {
    GET_TEST_REQUEST,
    getTestRequest,
    getTestSuccess,
    getTestFail
} from './actions'

function responseHandler(url) {
    return fetchJsonP(url)
        .then((response) => response.json())
        .then((response) => response.response[0].id)
}

function* getTest(action) {
    try {
        const data = yield call(responseHandler, 
            'https://api.vk.com/method/users.get?user_ids=t7490w743m&v=5.65')
        
        yield put(getTestSuccess(data));
    } catch(err) {
        yield put(getTestFail(err));
    }
}

export default function* main() {
    yield takeLatest(GET_TEST_REQUEST, getTest)
}