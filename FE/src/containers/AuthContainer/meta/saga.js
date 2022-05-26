import { all, takeLatest, put } from 'redux-saga/effects';
import * as constants from "./constants";
import * as actions from "./actions";

function* handleGetAuth(action) {
    try {
        yield put(actions.getAuthSuccess())
    } catch(error) {
        yield put(actions.getAuthError(error))
    }
}

export default function*() {
    yield all([
        yield takeLatest(constants.GET_AUTH, handleGetAuth),
    ]);
}
