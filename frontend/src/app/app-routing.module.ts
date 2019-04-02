import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UserComponent } from './users/users.component';

const routes: Routes = [
  	{ 
		path: 'main', 
		component: UserComponent,
	},
	{ path: '', pathMatch: 'full', redirectTo: 'main' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
