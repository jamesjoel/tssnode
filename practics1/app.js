var express=require('express');
var app=express();
app.listen(3000, function(){
	console.log('Exress Server Running');
});

app.get('/', function(req, res){
	console.log("Home page loading");
	//res.send('<h1>Hello World</h1>');
	res.sendFile(__dirname+'/home.html');
});
app.get('/about', function(req, res){
	res.sendFile(__dirname+'/about.html');
})


