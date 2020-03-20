import produce from 'immer';
import Types from './actionTypes';

const INITIAL_STATE = {
	library: [],
};

export default function library(state = INITIAL_STATE, action) {
	return produce(state, draft => {
		switch (action.type) {
			case Types.LOAD_LIBRARY: {
				draft.library = action.payload.library;
				break;
			}
			case Types.LOAD_TEXT: {
				draft.profile = action.payload.text;
				break;
			}
			default:
		}
	});
}
