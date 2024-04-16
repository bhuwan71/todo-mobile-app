/* eslint-disable unicorn/filename-case */
import type { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { client } from '../../api/index';
import { fetchData, fetchDataError, fetchDataSuccess } from './apiSlice';

function* fetchDataAsync(): SagaIterator {
  try {
    const response = yield call(client.get, 'products');
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataError(error ?? 'An error occurred'));
  }
}

export function* watchFetchData(): SagaIterator {
  yield takeLatest(fetchData.type, fetchDataAsync);
}
