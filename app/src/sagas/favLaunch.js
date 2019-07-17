import { takeLatest, put } from 'redux-saga/effects'

function* favAsync(action) {
  let favs
  yield favs = fetch('http://localhost:3000/fav-launch', {
            headers: {
              'Content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
              "userId": "1",
              "launchId": action.payload.launchId,
              "status": action.payload.mode
            })
          })
          .catch(err => {
            console.log(err)
          })
}

export default function* watchloadLaunches() {
  yield takeLatest('FAV_LAUNCH', favAsync)
}