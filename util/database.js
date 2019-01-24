const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    'mongodb+srv://faheem:G6NzUEMeZHLAYxPl@cluster0-1wqh3.mongodb.net/test?retryWrites=true'
  )
    .then(client => {
      console.log('CONNECTED');
      callback(client);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = mongoConnect;