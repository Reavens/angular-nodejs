import { Component, Inject } from '@angular/core';


@Component({
	selector: 'users-component',
  	templateUrl: './users.component.html',
  	styleUrls: ['./users.component.css']
})
export class UserComponent {
	public userId : string = "";

	public sections  = {
		userList : false,
		userAdd  : false,
		userEdit : false
	};
	constructor() {
    	console.log("Debug on constructor");
	}

	showSection(section: string){
		Object.keys(this.sections).forEach((key) => {
			this.sections[key] = (key != section) ? false : true;
		});
	}
}
