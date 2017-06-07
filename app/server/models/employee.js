var mongoose=require('mongoose');

var employeeSchema = new mongoose.Schema({  
  first_name: {type: String},
  last_name: {type: String},
  email: {type: String},
  dob: {type: Date},
  gender:{type:String},  
  age:{type:Number}
});

mongoose.model( 'Employee', employeeSchema );