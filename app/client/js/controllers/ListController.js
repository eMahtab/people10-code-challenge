var appControllers=angular.module('app.controllers',[]);
appControllers.controller('ListController',function($scope,toaster,EmployeeService){    

    var loadEmployees=function(){
    	EmployeeService.getEmployees()
                  .then(function(response){    	            
    	            $scope.employees=response.data;
                })
      }

    loadEmployees();  

    $scope.employee={}
    $scope.genders=["Male","Female"];                        
    $scope.employee.gender = $scope.genders[0];
    $scope.updating=false;
    
    $scope.add=function(employee){ 
        if(validateForm(employee)){
         EmployeeService.createEmployee(employee)
            .then(function(){        	     
        	      toaster.pop('success',"Record added successfully")
        	      $scope.employee={}
                  loadEmployees();
                })
            .catch(function(){
        	      toaster.pop('error',"Error occured while adding record")
              })
        }else{
       	     toaster.pop('error',"Please fill in all the fields ")
        }
    }


    function validateForm(employee){       
        if ( (employee.hasOwnProperty('first_name') && employee.first_name !== '' ) &&
        	 (employee.hasOwnProperty('last_name') && employee.last_name !== '' ) &&
        	 (employee.hasOwnProperty('email') && employee.email !== '' ) &&
        	 (employee.hasOwnProperty('age') && employee.age !== '' ) &&
        	 (employee.hasOwnProperty('gender') && employee.gender !== '' ) &&
        	 (employee.hasOwnProperty('dob') && employee.dob !== '' ) ) {        	 

             return true;
        }
        return false;
    }

    $scope.delete=function(employee){        
        EmployeeService.deleteEmployee(employee._id)
        .then(function(data){
        	toaster.pop('success','Record deleted successfully')
        	loadEmployees();
        	$scope.employee={}
        })
    }


    $scope.edit=function(employee){
    	$scope.updating=true;
    	$scope.employee=angular.copy(employee);
    }

    $scope.update=function(employee){    	
    	if(validateForm(employee)){
        	EmployeeService.updateEmployee(employee._id,employee)
              .then(function(){        	     
        	     toaster.pop('success',"Record updated successfully")
        	     $scope.employee={}
        	     $scope.updating=false;
                 loadEmployees();                 
                })
              .catch(function(){
        	   toaster.pop('error',"Error occured while updating record")
              })
       }else{
       	     toaster.pop('error',"Please fill in all the fields ")
       }
    }
});