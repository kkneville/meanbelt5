var mongoose = require('mongoose');

var ResultSchema = new mongoose.Schema({

	status: {
		type: Boolean,
		default: false
	},

	_finalBids: {
		type: mongoose.Schema.Types.ObjectId, ref: "Item"
	},

}, {timestamps: true});

module.exports = mongoose.model('Result', ResultSchema)