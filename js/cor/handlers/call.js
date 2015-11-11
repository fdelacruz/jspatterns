define(function (require) {
	'use strict';

	var Handler = require('cor/handler'),
			smsHandler = require('cor/handlers/sms'),
			callHandler;

	callHandler = new Handler('call', handlerCall, smsHandler);

	function handlerCall(call) {
		console.log('Call placed to number', call.number, 'from number ', call.ownNumber);
	}

	return callHandler;
});
