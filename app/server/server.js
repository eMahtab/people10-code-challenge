var express=require('express');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');

var db=require('./config/db.js');
var models=require('./models/employee.js');
var routes=require('./routes/route.js');

var app=express();

app.use(express.static('app/client'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.get('/', function(req,res) {
  res.sendFile('index.html');
});

app.get('/employee',routes.getEmployees);
app.get('/employee/:id',routes.getEmployee);

app.post('/employee',routes.addEmployee);
app.delete('/employee/:id',routes.deleteEmployee);

app.put('/employee/:id',routes.updateEmployee);

var port = process.env.PORT || 8080;

var server=app.listen(port,function(req,res){
    console.log("Catch the action at http://localhost:"+port);
});