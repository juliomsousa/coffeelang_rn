import produce from 'immer';
import Types from './actionTypes';

const INITIAL_STATE = {
	startup: {
		loading: false,
		success: true,
	},
};

export default function startup(state = INITIAL_STATE, action) {
	return produce(state, draft => {
		switch (action.type) {
			case Types.STARTUP: {
				draft.startup.loading = true;
				break;
			}
			case Types.STARTUP_SUCCESS: {
				draft.startup.loading = false;
				draft.startup.success = true;
				break;
			}
			case Types.STARTUP_FAILURE: {
				draft.startup.loading = false;
				draft.startup.success = false;
				break;
			}
			default:
		}
	});
}
