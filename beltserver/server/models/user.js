var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({

	name: {
		type: String,
		required: [true, 'name is required'],
		minlength: 2
	},

	level: {
		type: Boolean,
		default: 1
	},

	
	_bids: [{
		type: mongoose.Schema.Types.ObjectId, ref: "Bid"
	}],

}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema)