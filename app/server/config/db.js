var mongoose = require( 'mongoose' );

var dbURI = 'mongodb://localhost/people10';

//var dbURI = 'mongodb://jason:jasonbourne@ds059215.mongolab.com:59215/cghr';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error',function (err) {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});


