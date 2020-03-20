import { all } from 'redux-saga/effects';

import startup from './startup/sagas';

export default function* rootSaga() {
	return yield all([startup]);
}
