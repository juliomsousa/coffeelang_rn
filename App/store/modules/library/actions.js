import Types from './actionTypes';

export function loadLibrary(library) {
	return {
		type: Types.LOAD_LIBRARY,
		payload: { library },
	};
}

export function loadText(text) {
	return {
		type: Types.LOAD_TEXT,
		payload: { text },
	};
}
