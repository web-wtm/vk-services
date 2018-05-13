import { fork, all } from  'redux-saga/effects'

import getPosts from '../Posts/saga'
import getPhotos from '../Photos/saga'
import { checkUserId, checkMutualFriends } from '../Friends/saga'

export default function* main() {
    yield all([
        fork(getPosts),
        fork(getPhotos),
        fork(checkUserId),
        fork(checkMutualFriends)
    ])
}