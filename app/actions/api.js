import action from '../utils/createAction'
import API from '../types/api'

export default {
    getUserId: (user_ids) => action(API.GET_USER_ID, user_ids),
    getMutualFriends: ({ source_uid, target_uid, access_token }) => action(API.GET_MUTUAL_FRIENDS, { source_uid, target_uid, access_token }),
    getPosts: ({ domain, count }) => action(API.GET_POSTS, { domain, count }), 
    getPhotos: ({ lat, long, radius }) => action(API.GET_PHOTOS, { lat, long, radius })
}