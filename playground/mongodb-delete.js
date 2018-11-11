// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //destructuring an object in ES6

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (error, client) => {
  if(error) {
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('Connected to Mongodb server');
  const db = client.db('TodoApp');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat dinner'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  db.collection('Todos').deleteOne({text: 'Eat dinner'}).then((result) => {
    console.log(result);
  });
  // findOneAndDelete



  //client.close(); //closed the connecting with the Mongodb server
});
