var mongoose = require('mongoose');
var User = require('../models/user');
var Item = require('../models/item');
var Bid = require('../models/bid');
var session = require('express-session');


module.exports = {


	create: function(req, res){
		console.log("Arrived at bids/create")	

		User.findOne({_id: session.user_id}, function(err, user){
			if (err){
				console.log('error finding user at bid create')
				return res.json({error: err.errors})
			}
			console.log("found user: ", user)
			Item.findOne({_id: req.body.item_id }, function(err, item){
				if (err){
					console.log('error finding item at bid create')
					return res.json({error: err.errors})
				}
				console.log("found item: ", item)
				var bid = new Bid(req.body);
				bid.bidder = user.name
				bid._user = user._id
				bid.save(function(err){
					if (err){
						console.log('error saving bid')
						return res.json({error: err.errors})
					}
					console.log("user saved to bid")
					item._bids.push(bid)
					console.log(item.highest_bidder)
					console.log(item.highest_bid)
					if (item.highest_bidder == "None"){
						item.highest_bid = bid.amt
						item.highest_bidder = user.name
					}
					else if (bid.amt > item.highest_bid) {
						console.log(bid.amt)
						console.log(item.highest_bid)
						item.highest_bid = bid.amt
						item.highest_bidder = user.name
					}
					item.save(function(err){
						if (err){
							console.log('error saving item')
							return res.json({error: err.errors})
						}
						console.log("bid saved to item")
						return res.json({status:"success"})
					})
				})
			})
		})
	},


	delete: function(req, res){
		console.log("Arrived at bids/delete")	

		Bid.remove({}, function(err){
			if (err){
				console.log('error finding user at bid create')
				return res.json({error: err.errors})
			}
			console.log("bids deleted")
			Item.find({}, function(err, items){
				if (err){
					console.log('error finding item at bid create')
					return res.json({error: err.errors})
				}
				for (var a = 0; a < items.length; a++){
					items[a]._bids = []
					items[a].highest_bidder = "None"
					items[a].highest_bid = 0
					items[a].save(function(err){
						if (err){
							console.log('error saving item')
							return res.json({error: err.errors})
						}
						console.log("item saved")
					})
				}
				return res.json({status:"success"})		
			})
		})
	}		

}