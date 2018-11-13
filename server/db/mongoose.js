var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //let mongoose use Promise in ES6
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

module.exports = {mongoose};
