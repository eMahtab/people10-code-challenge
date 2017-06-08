var mongoose=require('mongoose');

var employeeSchema = new mongoose.Schema({  
  first_name: {type: String},
  last_name: {type: String},
  email: {type: String,index: { unique: true }},
  dob: {type: Date},
  gender:{type:String},  
  age:{type:Number,min: 18, max: 70}
});

mongoose.model( 'Employee', employeeSchema );