import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import root reducer
import rootReducer from './reducers/index';

// Default data
import posts from './data/posts';
import comments from './data/comments';


const defaultState = {
    posts,
    comments
};

if(module.hot) {
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    })
}

// For Redux dev tools
const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);



export const store = createStore(rootReducer, defaultState, enhancers);
export const history = syncHistoryWithStore(browserHistory, store);
