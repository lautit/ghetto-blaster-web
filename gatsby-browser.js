import * as Sentry from '@sentry/browser';

const onClientEntry = function(_, pluginParams) {
	Sentry.init({ dsn: 'https://7be4537138e34c209d5757f2b9f4da8b@sentry.io/1772908' });
	window.Sentry = Sentry;
};

export { onClientEntry };
