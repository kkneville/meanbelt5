var mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost/belt5');
mongoose.Promise = global.Promise; 
var fs = require('fs'); 
var path = require('path'); 
var models_path = path.join(__dirname, './server/models'); 
