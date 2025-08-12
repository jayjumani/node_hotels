const express = require('express')
const app = express();
const db = require('./db');
const passport = require('./auth');
const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body 

//middleware function
const logRequest = (req,res,next) => {
  console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
  next();//move on to the next phase
}
app.use(logRequest);

app.use(passport.initialize());

const localAuthMiddleware = passport.authenticate('local', {session: false})
app.get('/', function(req, res){
  res.send('welcome to our hotel');
})
 

//import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

//use the routers
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);


app.listen(3000, ()=>{
    console.log('listening on port 3000');
})