"use strict";

var baiduKeys = require('./baidusttkeys.json');
var SendToBaidu = require('./index.js');

var config = {
	keys: baiduKeys,
	//options are: 'ct', 'zh','en'.
	languageModel :'en',
	audioFile: "/Users/pietropassarelli/Downloads/brooklyn.wav",
	fileFormat : 'wav',
	fileRate: 16000
};

var SendToBaiduUtil = new SendToBaidu();

SendToBaiduUtil.send(config, function(error, data) {

	   if(error){
            console.log('<error>: ' + JSON.stringify(error, null,2));
        }else{
        	console.log('<recognize>: ' + JSON.stringify(data, null,2));
        }
});
            