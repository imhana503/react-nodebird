import { all, fork } from 'redux-saga/effects';

import postSaga from './post';
import userSaga from './user';

export default function* rootSaga(){  
  yield all([
    fork(watchLogin),
    fork(watchLogOut),
    //fork(watchAddPost),
  ]);
}