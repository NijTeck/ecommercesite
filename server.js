require('./models/db');

const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');
const orderController = require('./controllers/orderController');




// Configure template Engine and Main Template File
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'/public')));
app.set('views', path.join(__dirname, 'views'));
const handlebars = exphbs.create({
  // layoutsDir: path.join(__dirname, 'app/views/layouts'),
  // partialsDir: path.join(__dirname, 'app/views/partials'),
  defaultLayout: 'index',
  extname: 'hbs'
});
app.set('view engine', 'handlebars.engine');
app.listen(3000,()=>{
    console.log('Server on port: 3000');
});
app.use('/',orderController);