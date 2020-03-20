import { combineReducers } from 'redux';

import startup from './startup/reducer';
import library from './library/reducer';
import glossary from './glossary/reducer';

export default combineReducers({ library, glossary, startup });
