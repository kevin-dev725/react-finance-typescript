import { all } from 'redux-saga/effects';

import AuthSaga from './auth';

export default function* rootSaga() {
  yield all([
    AuthSaga.authFlow(),
  ]);
}
