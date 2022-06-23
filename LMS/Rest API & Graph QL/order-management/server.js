const app = require('./app');
const express = require('express');
const port = process.env.PORT || 3000;


app.use(express.static(__dirname+'/public'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/',(req,res) => {
    res.render('order',{});
});

app.listen(port, () => {
    console.log('Express server listening on port ' + port);
  });