var app=angular.module('employeeApp',['mgcrea.ngStrap','toaster','ngAnimate',
	          'app.constants','app.services','app.controllers']);

app.config(function($datepickerProvider) {
  angular.extend($datepickerProvider.defaults, {
    dateFormat: 'dd-MM-yyyy',
    autoclose:true
  });
})

