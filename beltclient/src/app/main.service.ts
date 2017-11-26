import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { User } from './user'

@Injectable()
export class MainService {

  constructor(private _http: Http,
  	  	private _route: Router 
  	  	) { }

currentUser(callback){
  return this._http.get('/user')
    .subscribe(
      (response) => {
        if (!response.json().user){
          console.log('no user')
          callback(false)
        }
        else {
          console.log(response.json().user.name)
          callback(response.json().user)
        }
      }
    )
}

  items = []

  addUser(user, callback){
  	console.log("submitting; ", user)
  	return this._http.post('/login', user)
  	.subscribe(
  		(response) => {
  			console.log('Success');
  			console.log(response.json().user.name)
  			callback(response.json().user);
  		},
  		(err) => {
  			console.log(err);
  		}
  	)
  }

  logout(callback) {
  	return this._http.get('/logout')
  	.subscribe(
  		(response) => {
  			console.log('Logged out');
  			callback()
  		}
  )}




  bid(bid, callback){
    console.log(bid)
    return this._http.post('/create', bid)
    .subscribe(
      (response) => {
        console.log('Success');
        console.log(response.json())
        callback(response.json());
      },
      (err) => {
        console.log(err);
      }
    )
  }


  getItems(callback){
    console.log("attempting to get items")
    return this._http.get('/index')
    .subscribe(
      (response) => {
        console.log(response.json())
        callback(response.json().items);
      },
      (err) => {
        console.log(err);
      }
    )
  }

  restart(callback){
    return this._http.get('/restart')
    .subscribe(
      (response) => {
        console.log('Success');
        console.log(response.json())
        callback(response.json());
      },
      (err) => {
        console.log(err);
      }
    )
  }




}
