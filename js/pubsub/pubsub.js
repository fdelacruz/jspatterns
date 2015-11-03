define(function () {
	'use strict';

	var subscribers = {};

	return {
		publish: function (topic, data) {
			if (!subscribers[topic]) {
				return;
			}

			subscribers[topic].forEach(function (subscribe) {
				subscribe(data);
			});
		},
		subscribe: function (topic, callback) {
			if (!subscribers[topic]) {
				subscribers[topic] = [];
			}

			subscribers[topic].push(callback);
		}
	};
});
