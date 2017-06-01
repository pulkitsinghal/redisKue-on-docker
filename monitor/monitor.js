var kue = require('kue');

var queue = kue.createQueue({
  redis: process.env.REDIS_URL
});

queue.create('email', {  
    title: 'Welcome to the site',
    to: 'user@example.com',
    template: 'welcome-email'
}).save();

var express = require('express');
var kueUiExpress = require('kue-ui-express');
var app = express();

kueUiExpress(app, '/kue/', '/api');
app.use('/api', kue.app); // Mount kue JSON api

//kueUiExpress(app, '/kue/', '/');
//app.use('/', kue.app);

app.listen(3000, function () {
  console.log('server is listening on port 3000...')
});