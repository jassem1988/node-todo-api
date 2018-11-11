// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //destructuring an object in ES6

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (error, client) => {
  if(error) {
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('Connected to Mongodb server');
  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5be7d4ea811cbf66e22fd260')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // },(error) => {
  //   console.log('Unable to fetch todos', error);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // },(error) => {
  //   console.log('Unable to fetch todos', error);
  // });

  db.collection('Users').find({name: 'Jassem'}).toArray().then((docs) => {
    console.log('todos with name Jassem: ');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (error) => {
    console.log('Unable to fetch todos with name Jassem', error);
  });

  //client.close(); //closed the connecting with the Mongodb server
});
