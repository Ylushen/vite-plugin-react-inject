import { call, put, takeEvery, spawn } from 'redux-saga/effects';

const FETCH_DATA = 'FETCH_DATA';
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

function* fetchData() {
	const data = yield call(
		() => fetch('https://httpbin.org/get')
			.then(response => response.json()),
	);
	console.log(data, 'datadata')
	// yield put({ type: FETCH_DATA_SUCCESS, payload: { data } });
}

function* rootTakeEvery() {
	yield takeEvery(FETCH_DATA, fetchData);
}

function* mySaga() {
	yield spawn(rootTakeEvery)
}


export default mySaga;