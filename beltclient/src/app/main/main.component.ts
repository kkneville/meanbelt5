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
           this._MainService.getStatus(
             (res) => {
                if (res.status) {
                      this._route.navigateByUrl('/main/show')
                      return
                }
                this._route.navigateByUrl('/main/list')
                return
              }
            )
        }
        else {
          this._route.navigateByUrl('/login')
        }
      }
    )
  }

  logout() {
    this._MainService.logout(
      () => {
        this._route.navigateByUrl('/login')
      }
    )
  }



  
}



