import { Component, OnInit} from '@angular/core';
import { UsersService } from '../../services/users.service';
import { UserComponent } from '../users.component';

@Component({
	selector: 'users-list-component',
  	templateUrl: './usersList.component.html',
  	styleUrls: ['./usersList.component.css']
})
export class UserListComponent implements OnInit{
	users : [];
	constructor(private usersService : UsersService,
				private userComponent : UserComponent) {
    	
	}

	ngOnInit(){
		this.refreshUserList();
	}


	deleteUser(id : string){
		this.usersService.deleteUser(id).subscribe((data) => {
			this.refreshUserList();
		}, (error) => {
			console.log('Error deleting user', error);
		});
	}

	refreshUserList(){
		this.usersService.getUsers().subscribe((data) => {
			this.users = data['users'];
		});
	}

	editUser(id : string){
		this.userComponent.userId = id;
		this.userComponent.showSection('userEdit');
	}
}
