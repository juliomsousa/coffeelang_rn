import Types from './actionTypes';

export function startup() {
	return {
		type: Types.STARTUP,
	};
}

export function startupSuccess() {
	return {
		type: Types.STARTUP_SUCCESS,
	};
}

export function startupFailure() {
	return {
		type: Types.STARTUP_FAILURE,
	};
}
