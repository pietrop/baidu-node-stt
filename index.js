"use strict";
const fs = require('fs');
var AipSpeech = require("./src/AipSpeech.js");
//credentials

/**
* @constructs SendToBaidu
* @description API Object to work with Baidu STT APIk
*/
var SendToBaidu = function(){};


SendToBaidu.prototype.send = function(config , cb){
	//credentials
	var APP_ID 			= config.keys.app_id;
	var API_KEY 		= config.keys.api_key;
	var SECRET_KEY 		= config.keys.secret_key;

	var client 			= new AipSpeech(APP_ID, API_KEY, SECRET_KEY);

	var audioFile 		= config.audioFile;
	var fileFormat 		= config.fileFormat;
	var fileRate 		= config.fileRate;
	var languageModel 	= config.languageModel; 

	let voice 			= fs.readFileSync(audioFile);
	let voiceBuffer 	= new Buffer(voice);


	client.recognize(voiceBuffer, fileFormat, fileRate, {lan: languageModel}).then(function (result) {

		if (result.err_msg == "success."){
			if(cb){cb(null, result);}else{return result;}
			// The error messages returned are not returned as a separate param in the callback.
			// The error message have different attributes depending on whether is an authentication error or there is no internet connection available. 
			// Hence the split to cover both cases.
		}else if(result.errno){
      //example error no internet
			// {
			//   "code": "ENOTFOUND",
			//   "errno": "ENOTFOUND",
			//   "syscall": "getaddrinfo",
			//   "hostname": "aip.baidubce.com",
			//   "host": "aip.baidubce.com",
			//   "port": 443
			// }
			if(cb){cb(result,null);}else{return result;}
		}else{
      //example error wrong credentials
			// {
			//   "err_msg": "authentication failed.",
			//   "err_no": 3302,
			//   "sn": "741594553131499672179"
			// }
			if(cb){cb(result,null);}else{return result;}
		}
	});
};

module.exports = SendToBaidu;

