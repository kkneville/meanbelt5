import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
import { User } from '../../user';
import { Bid } from '../../bid';
import { Item } from '../../item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {


items = []
currentUser = new User()

constructor(
  	private _MainService: MainService,
  	private _route: Router
  ) { }

ngOnInit() {
    this._MainService.currentUser(
      (user) => {
        if (user) {
           this.currentUser = user
        }
        else {
          console.log("no user")
        }
      }
    ),

    this._MainService.getStatus(
      (res) => {
        if (res.status) {
          if (res.status == false) {
            this._route.navigateByUrl('/list')
            return
          }
        }
        else {
          console.log("error getting status")
        }
      }
    ),



  	this._MainService.getItems(
      (items) => {
        if (items) {
          this.items = items
          console.log(items)
        }
        else {
          console.log("no items")
        }
      }
    )
  };


onSubmit(event){
  this._MainService.restart((response) => {
      if (response) {
          console.log(response)
          this._route.navigateByUrl('/main/list')
        }
        else {
          console.log("no response")
        }
    })
}


}
