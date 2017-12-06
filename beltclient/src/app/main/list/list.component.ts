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
  group = []
  groups = []
  list = []
  matrix = []

  constructor(
  	private _MainService: MainService,
  	private _route: Router
  ) { }

  
  ngOnInit() {
    this.group = []
    this.groups = []
    this.matrix = []
    this.list = []
  	this._MainService.getItems(
      (items) => {
        if (items) {
          this.items = items
          console.log(items)
          for (var i=0; i<items.length; i++){
            if (this.group.length == 3){
              console.log("pushing group into groups")
              this.groups.push(this.group)
              this.group = []
              this.matrix.push(this.list)
              this.list = []
              console.log("pushing ", i, " into group" )
              this.group.push(items[i])
              this.list.push(true)
            }
            else {
              console.log("pushing ", i, " into group" )
              this.group.push(items[i])
              this.list.push(true)
            }
          }
          console.log(this.group.length)
          if (this.group.length > 0){
            this.groups.push(this.group)
            this.group = []
            this.matrix.push(this.list)
          }
          console.log(this.groups)
          console.log(this.matrix)
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

alert = ""

onSubmit(event){
  console.log(this.bid)
  this._MainService.bid(this.bid,
    (response) => {
      if (response) {
          console.log(response)
          if (response.reject) {
            this.alert = response.reject
            this.bid = new Bid()
            console.log(this.bid)
            this.ngOnInit()
            return
          }
          this.alert = ""
          this.ngOnInit()
        }
      else {
          console.log("no response")
      }  
    }
  )
}


activate(){
  this.bid = new Bid

}

onBid(event){
  console.log(this.bid)
  this._MainService.bid(this.bid,
    (response) => {
      if (response) {
          console.log(response)
          if (response.reject) {
            this.alert = response.reject
            this.bid = new Bid()
            console.log(this.bid)
            this.ngOnInit()
            return
          }
          this.alert = ""
          this.ngOnInit()
        }
      else {
          console.log("no response")
      }  
    }
  )
}



updateStatus(event){
  console.log("ending bidding")
  this._MainService.updateStatus(
    (res) => {
      console.log(res)
      if (res.error) {
        console.log(res.error)
        return
      }
      if (res.status) {
          this._route.navigateByUrl("/main/show")
          return
      }
      else {
        console.log("status false")
      }
    }
  )
}


}
