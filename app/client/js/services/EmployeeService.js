var appServices=angular.module('app.services',[]);


appServices.service('EmployeeService',function($http,CONSTANT){

   this.getEmployees = function() {
       return $http.get(CONSTANT.API_URL+'/employee');
     }

   this.getEmployee = function(_id) {
        return $http.get(CONSTANT.API_URL+'/employee/'+_id);
      }

   this.createEmployee = function(employee) {
        return $http.post(CONSTANT.API_URL+'/employee',employee,
        	              {headers:{"Content-Type":"application/json"}}
        	             );
      }

   this.deleteEmployee = function(_id){
     return $http.delete(CONSTANT.API_URL+'/employee/'+_id);
   }

   this.updateEmployee = function(_id,employee){
     return $http.put(CONSTANT.API_URL+'/employee/'+_id,employee,
     	              {headers:{"Content-Type":"application/json"}}
     	             );
   }

});

