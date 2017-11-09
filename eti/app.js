var express=require('express');
var app=express();
app.listen(3000, function(){
	console.log('Running');
});

var logger=function(req, res, next){
	console.log(req.url);
	console.log('Logger Calling');
	next();
}
app.use(logger);


app.get('/', function(req, res){
	console.log("Calling");
})
app.get('/home', function(req, res){
	// res.send("<h1>Home Page</h1>");
	res.sendFile(__dirname+'/home.html');
	console.log('Home Calling');
	// next();
})
app.get('/about', function(req, res){
	res.sendFile(__dirname+'/about.html');
})