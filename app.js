const express = require('express');
const path = require('path');
// init app
const app = express();

// load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function(req,res){
  res.render('index');
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
