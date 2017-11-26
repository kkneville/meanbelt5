import { Component, OnInit } from '@angular/core';
import { User } from './user';
// import { Question } from './question';
// import { Answer } from './answer';
import { MainService } from './main.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'School Fundraiser';

     constructor(
  	private _MainService: MainService,
  	private _route: Router
  ) { }


  currentUser 

  ngOnInit() {
  	this._MainService.currentUser(
      (user) => {
        if (user) {
           this.currentUser = user
           this._route.navigateByUrl('/main')
        }
        else {
        	this._route.navigateByUrl('/login')
        }
  	})
  };	

  logout() {
	  this._MainService.logout(
	  		() => {
	  			this._route.navigateByUrl('')
	  		}
	  	)
	} 



}
