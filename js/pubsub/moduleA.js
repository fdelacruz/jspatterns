define(function (require) {
	'use strict';

	var pubsub = require('pubsub/pubsub'),
			subscription;

	subscription = pubsub.subscribe('atopic', function (data) {
		console.log('A topic was published with data: ' + data);
		subscription.dispose();
	});
});
