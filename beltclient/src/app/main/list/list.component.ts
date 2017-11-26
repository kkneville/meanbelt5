import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
import { User } from '../../user';
import { Bid } from '../../bid';
import { Item } from '../../item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	items = []
  item_id = ""
  bid = new Bid()
	users
	currentUser = new User

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
  console.log(this.bid)
  this._MainService.bid(this.bid,
    (response) => {
      if (response) {
          console.log(response)
          this.ngOnInit()
        }
        else {
          console.log("no response")
        }
    })
}




}
