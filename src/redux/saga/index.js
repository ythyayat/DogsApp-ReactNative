import { all } from 'redux-saga/effects';
import dogSaga from './dogSaga';

export default function* rootSaga() {
  yield all([
    dogSaga()
  ])
}