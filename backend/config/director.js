
"use strict";

const controllerFolder = '../controllers/';
function classLoader(className, method){
	 return function handlerController(request, response, next) {
		const GenericClass = require(controllerFolder  + className);
		const controllerClass = new GenericClass(request, response);
		try{
			console.log('Executing : ' + className + "." + method);
			controllerClass[method]();
		} catch(e){
			console.log('Catch on director', e);	
			next(e);
		}
    }
}

module.exports = classLoader;