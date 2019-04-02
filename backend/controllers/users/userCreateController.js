"use strict";

var baseController = require('../controller');


class userCreateController extends baseController{
	create(){		
        if(this.checkUserData(this.request.body)){
            var model = this.loadModel("userModel");
            var userId = model.createItem(this.request.body);
            this.response.send({ success : true});	
        } else {
            this.sendErrorResponse(500, "Error saving user");
        }
    }
    checkUserData(user){
        //recheck user params before insert 
        return true;
    }
}







module.exports = userCreateController;