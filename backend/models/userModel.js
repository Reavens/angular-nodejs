"use strict";


const fs = require('fs');
const path = require('path');
const uuidv1 = require('uuid/v1');
class userModel{
	getAll(){		
        var data = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "persistent", "users.json")));
        return data;
	}
	
	getUser(id){
		var data = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "persistent", "users.json")));
		var selected = false;
		for(var i = 0; i< data.length; i++){
			var item = data[i];
			if(item['id'] == id){
				selected = item;
			}
		}
        return selected;
	}

	deleteItem(id){		
		var data 			= JSON.parse(fs.readFileSync(path.join(__dirname, "..", "persistent", "users.json")));
		var currentIndex 	= false;
		for(var i=0; i < Object.keys(data).length; i++){
			var element = data[i];
			if(element['id'] == id){
				currentIndex = i;
			}
		}

		if(currentIndex !== false){
			data.splice(currentIndex, 1);
			fs.writeFileSync(path.join(__dirname, "..", "persistent", "users.json"), JSON.stringify(data));
		}
        return currentIndex !== false ? currentIndex : false;
	}

	createItem(user){
		var data 			= JSON.parse(fs.readFileSync(path.join(__dirname, "..", "persistent", "users.json")));
		user['id'] = uuidv1();
		data.push(user);
		fs.writeFileSync(path.join(__dirname, "..", "persistent", "users.json"), JSON.stringify(data));
		return user['id'];
	}
}







module.exports = userModel;