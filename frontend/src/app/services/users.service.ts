import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
	constructor(private httpClient: HttpClient) { }
	  
  	getUsers(){
		return this.httpClient.get("http://localhost:8080/users-api/getUsers");
	}
	getUser(id){
		return this.httpClient.get("http://localhost:8080/users-api/getUser/" + id);
	}
	deleteUser(id : string){
		return this.httpClient.delete("http://localhost:8080/users-api/deleteUser/" + id);
	}
	create(user : object){
		return this.httpClient.post("http://localhost:8080/users-api/create/", user);
	}
}
