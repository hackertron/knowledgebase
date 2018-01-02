const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodekb');
let db = mongoose.connection;

// Check connection
db.once('open',function(){
  console.log('connected to mongodb');
});

// Check for DB errors
db.on('error', function(err){
  console.log(err);
});


// init app
const app = express();

// bring models
let Article = require('./models/article');

// load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Home Route
app.get('/', function(req, res){
  Article.find({}, function(err, articles){
    console.log(articles);
    if(err){
      console.log(err);
    } else {
      res.render('index', {
        title:'Articles',
        articles: articles
      });
    }
  });
});

// Add route
app.get('/articles/add', function(req,res){
  res.render('add_article',{
    title : 'Add Article'
  });
});

app.listen(3000, function(){
  console.log('listening on port 3000');
})
