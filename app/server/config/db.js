var mongoose = require( 'mongoose' );

//var dbURI = 'mongodb://localhost/people10';

var dbURI = 'mongodb://people10:people10mlab@ds115712.mlab.com:15712/people10';

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


