"use strict";

var baseController = require('../controller');


class userGetController extends baseController{

		
	getAll(){		
        var model = this.loadModel("userModel");
        var users = model.getAll();
        this.response.send({ users : users});	
    }
    
    getUser(){
        var userId = this.request.params.id;
        var model = this.loadModel("userModel");
        var user = model.getUser(userId);
        if(user){
            this.response.send({user : user});
        } else {
            this.sendErrorResponse(404, "User not found");
        }
        
    }
}







module.exports = userGetController;