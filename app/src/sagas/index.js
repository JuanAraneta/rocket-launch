import { fork, all } from 'redux-saga/effects'
import watchLoadLaunches from './load'
import watchFavLaunches from './favLaunch'

export default function* rootSaga() {
  yield all([
    fork(watchLoadLaunches),
    fork(watchFavLaunches)
  ])
}