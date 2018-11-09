const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');
const bodyParser = require('body-parser');
// Middlewares

app.use(express.static(path.join(__dirname+'/')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

// Configured ejs 

app.set('view engine','ejs')

// Routes
var routes = require('./routes/routes.js')(app);


http.listen(process.env.PORT || 4000,function(){
    console.log("Server has started.")
})
