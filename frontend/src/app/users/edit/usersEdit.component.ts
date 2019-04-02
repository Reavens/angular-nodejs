import { Component, OnInit, Input} from '@angular/core';
import { UsersService } from '../../services/users.service';
@Component({
	selector: 'users-edit-component',
  	templateUrl: './usersEdit.component.html',
  	styleUrls: ['./usersEdit.component.css']
})
export class UsersEditComponent implements OnInit{
	@Input() id: string;
	user = {
		name : "",
		lastName : "",
		enabled : false,
		email : ""
	}

	showErrors = false;
	errors = [];
	constructor(private usersService : UsersService) {
    	
	}

	ngOnInit(){
		this.usersService.getUser(this.id).subscribe((data) => {
			if(data['user']){
				this.user = data['user'];
			}
		});

	}

	save(){
		this.showErrors = false;
		this.errors = [];
		this.user.name.trim();
		this.user.lastName.trim();
		this.user.email.trim();
		if(!this.isAlphaNumeric(this.user.name, false) || this.user.name.length > 20 || this.user.name.length == 0){
			this.errors .push("Name must be alphanumeric and max 20 characters");
		}

		if(!this.isAlphaNumeric(this.user.lastName, true) || this.user.lastName.length > 40 || this.user.lastName.length == 0){
			this.errors .push("Last Name must be alphanumeric and max 40 characters");
		}

		if(!this.validateEmail(this.user.email) || this.user.email.length > 20 || this.user.name.length == 0){
			this.errors .push("Put a valid email and max 20 characters");
		}
		
		if(this.errors.length > 0){
			this.showErrors = true;
		} else {
			this.usersService.create(this.user).subscribe((data) => {
				console.log('User created');
			}, (error) => {
				console.log('Error creating user');
			});
		}

	}

	validateEmail(email) {
		var re = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
		return re.test(String(email).toLowerCase());
	}

	 isAlphaNumeric(str, canHaveSpace) {
		var code, i, len;
	  
		for (i = 0; len < str.length; i++) {
		  code = str.charCodeAt(i);
		  if (!(code > 47 && code < 58) && // numeric (0-9)
			  !(code > 64 && code < 91) && // upper alpha (A-Z)
			  !(code > 96 && code < 123)) { // lower alpha (a-z)
				if(canHaveSpace && code != 32){
					return false;
				}
		  }
		}
		return true;
	  };
}
