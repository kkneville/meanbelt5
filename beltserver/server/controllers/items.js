var mongoose = require('mongoose');
var User = require('../models/user');
var Item = require('../models/item');
var Bid = require('../models/bid');
var session = require('express-session');
var sortBy = require('array-sort-by');


module.exports = {

	index: function(req, res){
		console.log("inside of index")
		Item.find({})
			.populate('_bids')
			.exec(function(err, items){
			if (err) {
				console.log(err)
				console.log("trouble finding items at index")
				return res.json({error:err.errors})
			}
			else {
				console.log("yo, here are your items:", items)	
				for (var i = 0; i < items.length; i++){
					sortBy(items[i]._bids, item => 'ASC:' + item.amt)
					// console.log(items[i]._bids)
				}
				
				return res.json({items:items})

				// for (var i=0; i< items.length; i++){
				// 	if (items[i]._bids > 0) {
				// 		console.log("bids: ", items[i]._bids)
				// 		for (var a=0; a< items[i]._bids.length; a++){
				// 			for (var b=a+1; a< items[i]._bids.length; b++){
				// 				if (items[i]._bids[a].amt > items[i]._bids[b].amt){
				// 					let temp = items[i]._bids[a]
				// 					items[i]._bids[a] = items[i]._bids[b]
				// 					items[i]._bids[b] = temp
				// 				} 
				// 			}
				// 			if (items[i]._bids[a].amt > items[i]._bids[items[i]._bids.length]){
				// 					let temp2 = items[i]._bids[a]
				// 					items[i]._bids[a] = items[i]._bids[items[i]._bids.length]
				// 					items[i]._bids[items[i]._bids.length] = temp2
				// 			}
				// 			console.log("sorted bids: ", items[i]._bids)	
				// 		}
				// 	}
				// }
				// return res.json({items:items})



			}
		});
	},



}	 		



