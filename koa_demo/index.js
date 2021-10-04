//import Koa
const Koa = require('koa');
//import body-parser
const bodyParser = require('koa-bodyparser');
//importing the routes
const personRoutes = require('./routes/persons.routes');


//start app
const app = new Koa();

//use body-parser
app.use(bodyParser());

//registering the routes
app.use(personRoutes.routes()).use(personRoutes.allowedMethods());

app.listen(3000);
console.log("app is running on port 3000");