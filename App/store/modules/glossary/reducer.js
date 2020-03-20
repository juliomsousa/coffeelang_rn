import produce from 'immer';
import Types from './actionTypes';

const INITIAL_STATE = {
	glossary: [
		{ word: 'lorem', difficulty: 4 },
		{ word: 'is', difficulty: 3 },
		{ word: 'a', difficulty: 2 },
		{ word: 'ipsum', difficulty: 1 },
		{ word: 'with', difficulty: 0 },
		{ word: 'typesetting', difficulty: 3 },
	],
};

export default function glossary(state = INITIAL_STATE, action) {
	return produce(state, draft => {
		switch (action.type) {
			case Types.SET_WORD: {
				draft.glossary = [...draft.glossary, action.payload.word];
				break;
			}
			case Types.DELETE_WORD: {
				draft.profile = draft.glossary.filter(
					w => w.word !== action.payload.word.word
				);
				break;
			}
			default:
		}
	});
}
