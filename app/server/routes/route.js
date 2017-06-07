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

exports.deleteEmployee=function(req,res){
                             var id=req.params.id;
                             Employee.findOneAndRemove({"_id":id},function(err){
                               if(err){
                                 console.log("Error : "+err);
                                 return res.status(404).send("Record not found");
                               }

                               return res.status(200).send("Record deleted Successfully");
                             });
              }


exports.getEmployee=function(req,res){
   var id=req.params.id;
   Employee.findOne({"_id":id}, function(err, record){
       if(err){
       console.log(err);
       res.status(404).send("No Record Found");
       return;
       }else{
        var data=record;
        res.status(200).send(data);
       }
   });
}              


exports.updateEmployee=function(req,res){
   var id=req.params.id;

   Employee.findOne({"_id":id},function(err,record){
     if(err){
       console.log("Error Occured ");
       res.status(404).send("Record Not Found");
     }
     else{
       record.first_name=req.body.first_name;
       record.last_name=req.body.last_name;
       record.email=req.body.email;
       record.age=req.body.age;
       record.gender=req.body.gender;
       record.dob=req.body.dob;

       record.save(function(err,updatedRecord){
             if(err){
                console.log("Error Occured while updating record")
                res.status(500).send("Error Occured while updating record");
              }
             else{
              res.status(200).send(updatedRecord);
               }
        });

      }

    });
}                                          