import { takeEvery, put } from 'redux-saga/effects'

function* loadLaunchesAsync() {
  let launches
  yield launches = fetch('http://localhost:3000/')
          .then(res => res.json())
          .then(res => {
            console.log(res)
            launches = res 
          })
  yield put({type: 'LOAD_LAUNCHES_ASYNC', payload: launches})
}

export default function* watchloadLaunches() {
  yield takeEvery('LOAD_LAUNCHES', loadLaunchesAsync)
}