import { fork, all } from  'redux-saga/effects'

import getPosts from '../../components/TopPosts/saga'
import getPhotos from '../../components/PhotosSearch/saga'
import { checkUserId, checkMutualFriends } from '../../components/MutualFriends/saga'

export default function* main() {
    yield all([
        fork(getPosts),
        fork(getPhotos),
        fork(checkUserId),
        fork(checkMutualFriends)
    ])
}