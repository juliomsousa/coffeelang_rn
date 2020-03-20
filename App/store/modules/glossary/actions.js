import Types from './actionTypes';

export function setWord(word) {
	return {
		type: Types.SET_WORD,
		payload: { word },
	};
}

export function deleteWord(word) {
	return {
		type: Types.DELETE_WORD,
		payload: { word },
	};
}
