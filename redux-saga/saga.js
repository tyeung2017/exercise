import { put, takeEvery, call, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { watch } from 'fs';

export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: 'INCREMENT' });
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export function* helloSaga() {
  console.log('helleo Saga !');
}


export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync(),
  ]);
}
