import { call, put, takeLatest } from 'redux-saga/effects'
import API from '../types/api'
import createBaseRequest from '../utils/createdBaseRequest'
import urlConstructor from '../utils/urlConstructor'

export default function* () {
    yield takeLatest(API.GET_USER_ID, createBaseRequest(API.GET_USER_ID, urlConstructor.getUserIdRequest))
    yield takeLatest(API.GET_MUTUAL_FRIENDS, createBaseRequest(API.GET_MUTUAL_FRIENDS, urlConstructor.getMutualFriendsRequest))
    yield takeLatest(API.GET_POSTS, createBaseRequest(API.GET_POSTS, urlConstructor.getPostsRequest))
    yield takeLatest(API.GET_PHOTOS, createBaseRequest(API.GET_PHOTOS, urlConstructor.getPhotosRequest))
}