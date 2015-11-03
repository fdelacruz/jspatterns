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
			var index;

			if (!subscribers[topic]) {
				subscribers[topic] = [];
			}

			// push method return the new length of the array
			index = subscribers[topic].push(callback) -1;

			return {
				dispose: function () {
					subscribers[topic].splice(index, 1);
				}
			};
		}
	};
});
