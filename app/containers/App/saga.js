import { fork, all } from  'redux-saga/effects'

import getPosts from '../../containers/Posts/saga'
import getPhotos from '../../containers/Photos/saga'
import { checkUserId, checkMutualFriends } from '../../containers/Friends/saga'

export default function* main() {
    yield all([
        fork(getPosts),
        fork(getPhotos),
        fork(checkUserId),
        fork(checkMutualFriends)
    ])
}