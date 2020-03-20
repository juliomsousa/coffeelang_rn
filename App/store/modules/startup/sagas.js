import { all, takeLatest, put, call } from 'redux-saga/effects';
import { startupSuccess, startupFailure } from './actions';
import { loadFonts } from '../../../config';
import Types from './actionTypes';

export function* startup() {
	try {
		yield call(loadFonts);
		yield put(startupSuccess());
	} catch (error) {
		yield put(startupFailure());
	}
}

// eslint-disable-next-line require-yield
export function* rehidrate() {
	console.tron.log('....redritating');
}

export default all([
	// takeLatest('persist/REHYDRATE', rehidrate),
	takeLatest(Types.STARTUP, startup),
]);
