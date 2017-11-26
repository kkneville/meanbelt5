var mongoose = require('mongoose');

var BidSchema = new mongoose.Schema({

	_user: {
		type: mongoose.Schema.Types.ObjectId, ref: "User"
	},

	bidder: {
		type: String
	},

	amt: {		
		type: Number,
		required: [true, 'bid amount is required']
	}	

}, {timestamps: true});

module.exports = mongoose.model('Bid', BidSchema)