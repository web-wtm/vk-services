import { fork, all } from 'redux-saga/effects'
import apiSaga from './api'

export default function* main() {
    yield all([
        fork(apiSaga)
    ])
}