// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //destructuring an object in ES6

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (error, client) => {
  if(error) {
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('Connected to Mongodb server');
  const db = client.db('TodoApp');

  db.collection('Todos').findOneAndUpdate({
  _id: new ObjectID('5be8669c779f7c0cfdece17c')
}, {
  $set: {
    completed: true
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});

  //client.close(); //closed the connecting with the Mongodb server
});
