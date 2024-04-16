/* eslint-disable unicorn/filename-case */
import { all } from 'redux-saga/effects';

import { watchFetchData } from './features/apiSaga';

export default function* rootSaga() {
  yield all([watchFetchData()]);
}
