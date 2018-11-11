// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //destructuring an object in ES6

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (error, client) => {
  if(error) {
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('Connected to Mongodb server');
  const db = client.db('TodoApp');

  // db.collection('Todo').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // },(error, result) => {
  //   if(error) {
  //     return console.log('Unable to insert todo', error);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Jassem',
  //   age: 31,
  //   location: 'Kuwait'
  // }, (error, result) => {
  //   if(error) {
  //     return console.log('Unable to insert user', error);
  //   }
  //   // console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  client.close(); //closed the connecting with the Mongodb server
});
