"use strict";
class Controller{
	constructor(request, response){
		this.response 			= response;
		this.request 			= request;
	}

	loadModel(name){
		var path = require('path');
		var Model = require(path.join(__dirname, "..", "models", name));
		var model = new Model();
		return model;
	}

	sendErrorResponse(httpCode, message){
		var response = {
			context : [],
			isDomain : true,
			errorMessage : message,
			name : "error",
			stack : "",

		}
		this.response.status(httpCode);
		this.response.send(JSON.stringify(response));
	}
	
	sendResponse(data){
		let response = {
			success : true,
			data : data,
			error : {
				msg : '',
				code : false
			}
		}
		this.response.send(response);
	}
}
module.exports = Controller;