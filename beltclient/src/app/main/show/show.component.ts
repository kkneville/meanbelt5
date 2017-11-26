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
  	this._MainService.getItems(
      (items) => {
        if (items) {
          this.items = items
          console.log(items)
        }
        else {
          console.log("no items")
        }
    }),

  	this._MainService.currentUser(
      (user) => {
        if (user) {
           this.currentUser = user
           // this.populate()
        }
        else {
          console.log("no user")
        }
    })
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
