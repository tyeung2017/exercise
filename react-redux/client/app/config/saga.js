import 'regenerator-runtime/runtime'; // what's this
import { call, put, takeEvery } from 'redux-saga/effects';
import { CONVERSION_ERROR, CONVERSION_RESULT, CONVERSION_START } from '../actions/fetch';

const goFetch = () => fetch('https://api.fixer.io/latest?base=GBP');

function* callingAPI(action) {
  const response = yield call(goFetch);
  const result = yield response.json();

  yield put({ type: CONVERSION_RESULT, result });
}

export default function* rootSaga() {
  yield takeEvery(CONVERSION_START, callingAPI);
}
