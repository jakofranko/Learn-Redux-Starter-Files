import React from 'react';
import { render } from 'react-dom';
import Raven from 'raven-js';

// Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// Import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { store, history } from './store';
import { sentry_url, logException } from './config';

Raven.config(sentry_url
    // {
    //     tags: {
    //         git_commit: 'blahbalhjb',
    //         userLevel: 'editor'
    //     }
    // }
).install();

// Example error logging functions:
// logException(new Error('download failed!'), {
//     email: 'blah@blah.com'
// });
//
// Raven.captureMessage('wut the');
// Raven.showReportDialog();

// CSS
import css from './styles/style.styl';

// if the path is the root "/", render the main component.
// Then, if the route also matches /view/:postId, render
// the Single component, otherwise render the PhotoGrid
const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'));
