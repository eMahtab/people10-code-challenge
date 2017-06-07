var appControllers=angular.module('app.controllers',[]);
appControllers.controller('ListController',function($scope,toaster,EmployeeService){

    console.log("List controller is hokked up")

    EmployeeService.getEmployees()
    .then(function(response){
    	console.log("Got all employees"+response.data);
    	$scope.employees=response.data;
    })

    $scope.employee={}


    $scope.genders=["Male","Female"];
                         
    $scope.employee.gender = $scope.genders[0];
    

    $scope.onSubmit=function(){
    	console.log("Submitting the form")
    }


    $scope.add=function(employee){
    	console.log("Add is called" +JSON.stringify(employee));
        if(validateForm(employee)){
        	EmployeeService.createEmployee(employee)
              .then(function(){
        	     console.log("Added");
        	     toaster.pop('success',"Record added successfully")
                 

                }).catch(function(){
        	 toaster.pop('error',"Error occured while adding record")
              })
       }else{
       	     toaster.pop('error',"Please fill in all the fields ")
       }
    }


    function validateForm(employee){
        /*if(employee.first_name)*/
        if ( (employee.hasOwnProperty('first_name') && employee['first_name'] != '' ) &&
        	 (employee.hasOwnProperty('last_name') && employee['last_name'] != '' ) &&
        	 (employee.hasOwnProperty('email') && employee['email'] != '' ) &&
        	 (employee.hasOwnProperty('age') && employee['age'] != '' ) &&
        	 (employee.hasOwnProperty('gender') && employee['gender'] != '' ) &&
        	 (employee.hasOwnProperty('dob') && employee['dob'] != '' ) ) {        	 

             return true;
        }
        return false;
    }




});