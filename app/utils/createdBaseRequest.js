import { call, put } from 'redux-saga/effects';
import request from './request';

const createBaseRequest = (type, urlMethod) => {
    return function* baseRequest({ payload }) {
        yield put({ type: `${type}_FETCH`, payload });
        try {
            const res = yield call(request, ...urlMethod(payload));
            if (res.response) {
                yield put({ type: `${type}_SUCCESS`, payload: res.response, request: payload, response: res });
            } else {
                const error = new Error(`Result is ${res.result}`);
                error.response = res;
                error.code = res.code;
                yield put({ type: `${type}_ERROR`, payload: error, request: payload });
            }
        } catch (error) {
            yield put({ type: `${type}_ERROR`, payload: error, request: payload });
        }
    };
};

export default createBaseRequest;
