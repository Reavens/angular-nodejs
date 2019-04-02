"use strict";

var baseController = require('../controller');


class userDeleteController extends baseController{

	delete(){
        var model = this.loadModel("userModel");
        if(this.request.params['id']){
            var itsOk = model.deleteItem(this.request.params['id']);
            if(itsOk !== false){
                this.response.send({success : true});
            } else {
                this.sendErrorResponse(500, "Error deleting item");
            }
        }
    }
}







module.exports = userDeleteController;