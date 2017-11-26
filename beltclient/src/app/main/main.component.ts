import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
  	private _MainService: MainService,
  	private _route: Router
  ) { }

 currentUser = new User

 ngOnInit() {
    this._MainService.currentUser(
      (user) => {
        if (user) {
           this.currentUser = user
           console.log("user is: ", this.currentUser)
        }
        else {
          this._route.navigateByUrl('/login')
        }
    })

  }

  logout() {
    this._MainService.logout(
      () => {
        this._route.navigateByUrl('/login')
      }
    )
  }



  
}



