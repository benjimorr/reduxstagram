import { createStore, impose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Root reducer
import rootReducer from './reducers/index';

// Internals
import comments from './data/comments';
import posts from './data/posts';

// Object for default data
const defaultState = {
	posts,
	comments,
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);
export default store;
