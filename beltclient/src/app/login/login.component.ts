import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { User } from '../user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
  	private _MainService: MainService,
  	private _route: Router
  ) { }

  ngOnInit(){}
  
  user = new User() 

  onSubmit(event){
  	event.preventDefault();
  	console.log('attempting to log in')
  	this._MainService.addUser(this.user, (user) => {
  		if (user) {
        console.log(user);
        this._route.navigateByUrl('/main') 
      }
    });
  }


}
