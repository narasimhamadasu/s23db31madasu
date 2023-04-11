var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var kiteRouter = require('./routes/kite');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');
var resourcerRouter = require('./routes/resource');
var kite = require("./models/kite");



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/kite', kiteRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourcerRouter);

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

// We can seed the collection if needed on server start
async function recreateDB(){
// Delete everything
await kite.deleteMany();
let instance1 = new
kite({kite_color:"yellow",kite_quality:"good",kite_cost:5.25});
let instance2 = new
kite({kite_color:"red",kite_quality:"better",kite_cost:3})
let instance3 = new
kite({kite_color:"green",kite_quality:"best",kite_cost:8})

instance1.save().then( () => 
{ console.log('First Object is created'); 
}).catch( (e) => { console.log('There was an error', e.message); });

instance2.save().then( () => 
{ console.log('second Object is created'); 
}).catch( (e) => { console.log('There was an error', e.message); });

 instance3.save().then( () => 
 { console.log('third Object is created'); 
 }).catch( (e) => { console.log('There was an error', e.message); });
}

let reseed = true;
if (reseed) { recreateDB();}




module.exports = app;
