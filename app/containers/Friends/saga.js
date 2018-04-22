import { call, put, takeLatest } from  'redux-saga/effects'
import { responseHandler, sortBy, serviceToken, apiUrl } from '../../utils/helpers'
import {
    getUserIdSuccess,
    getUserIdFail,
    GET_USER_ID_REQUEST
} from './action'

import {
    getMutualSuccess,
    getMutualFail,
    GET_MUTUAL_REQUEST
} from './action'

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

export function* checkUserId() {
    yield takeLatest(GET_USER_ID_REQUEST, getUserId)
}

export function* checkMutualFriends() {
    yield takeLatest(GET_MUTUAL_REQUEST, getMutualFriends)
}