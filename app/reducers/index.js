import { combineReducers } from 'redux'

import app from './app'
import friends from './friends'
import posts from './posts'
import photos from './photos'
    
const rootReducer = combineReducers({
    app,
    friends,
    posts,
    photos
});

export default rootReducer;