define(function (require) {
	'use strict';

	return {
		init: function () {
			
			var myVideo, myImage,
					mediaFactory = require('factory/mediaFactory');

			myVideo = mediaFactory.createMedia('Video', {
				length: 3.5,
				name: "My video"
			});

			myImage = mediaFactory.createMedia('Image', {
				width: 640,
				height: 480,
				name: "My image"
			});

			console.log(myVideo);
			console.log(myImage);
		}
	};

});
