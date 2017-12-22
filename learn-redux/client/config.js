import Raven from 'raven-js';

const sentry_key = '2564df1bf7f54981850bd2a4d0829b7f';
const sentry_app = '263211';
export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_app}`;

export function logException(ex, context) {
    Raven.captureException(ex, {
        extra: context
    });

    /*eslint no-console:0*/
    window && window.console && console.error && console.error(ex);
}
