import action from '../utils/createAction'
import APP from '../types/app'

export default {
    logIn: () => action(APP.LOG_IN),
    logOut: () => action(APP.LOG_OUT)
}