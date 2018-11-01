var express = require("express"); 
        var app = express(); 
        app.get("/",function(req,res){
        	res.end("Hola Mundo");
        });
        app.use(express.static("public")); 
        app.listen(8001);
        console.log("Servidor iniciado");