import _ from 'lodash'
import createTypes from '../utils/createTypes'
import createFetchTypes from '../utils/createFetchTypes'

export default createTypes(
    'API',
    _.flatten([
        createFetchTypes('GET_USER_ID'),
        createFetchTypes('GET_MUTUAL_FRIENDS'),
        createFetchTypes('GET_PHOTOS'),
        createFetchTypes('GET_POSTS')
    ])
)