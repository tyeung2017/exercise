import 'regenerator-runtime/runtime'; // what's this
import { call, put, takeEvery } from 'redux-saga/effects';
import { CONVERSION_ERROR, CONVERSION_RESULT, CONVERSION_START } from '../actions/fetch';

const goFetch = () => fetch('https://api.fixer.io/latest?base=GBP');

function* callingAPI(action) {
  try {
    const response = yield call(goFetch);
    const result = yield response.json();
    console.log(response, result, response.status);

    yield put({ type: CONVERSION_RESULT, result });

    if (!response.ok) { throw Error(result.error); }
  } catch (error) {
    yield put({ type: CONVERSION_ERROR, error: error.message });
  }
}

export default function* rootSaga() {
  yield takeEvery(CONVERSION_START, callingAPI);
}
