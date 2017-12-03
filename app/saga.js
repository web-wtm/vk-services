import { fork } from 'redux-saga/effects'
import mainSaga from './main/sagas'

export default function* main() {
    yield fork(mainSaga)
}