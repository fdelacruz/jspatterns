define(function (require) {
	'use strict';

	var pubsub = require('pubsub/pubsub');

	pubsub.subscribe('atopic', function (data) {
		console.log('A topic was published with data: ' + data);
	});
});
