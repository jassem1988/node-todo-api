var mongoose = require('mongoose');


mongoose.Promise = global.Promise; //let mongoose use Promise in ES6
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});


// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (error) => {
//   console.log('Unable to save todo');
// });



// var otherTodo = new Todo({
//   text: 'Something to do'
// });
//
// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (error) => {
//   console.log('Unable to save todo', error);
// });

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  }
});

var newUser = new User({
  email: ' jassem@awesome.com '
});

newUser.save().then((doc) => {
  console.log('User saved', doc);
}, (error) => {
  console.log('Unable to save user', error);
});
