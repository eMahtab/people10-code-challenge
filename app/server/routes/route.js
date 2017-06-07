var mongoose = require( 'mongoose' );
var Employee = mongoose.model( 'Employee' );

exports.addEmployee=function(req,res){

   console.log('At server '+JSON.stringify(req.body))

   var newEmployee=new Employee(req.body);

                  newEmployee.save(function(err,savedEmployee){
                       if(err){
                          var message="Error occured while storing new employee !!!";
                          console.log(message+"\n"+err);
                          res.status(500).send("Error Occured while saving Employee");
                        }else{
                         res.status(201).send(savedEmployee);
                          }
                 });

   }



exports.getEmployees=function(req,res){
                              Employee.find({}, function(err, records){

                                      if(err){
                                        console.log(err);
                                        res.status(500).send("Error Occured while fetching data");
                                        return;
                                      }else{
                                        var data=records;
                                        res.status(200).send(data);
                                      }

                              });

                            }
