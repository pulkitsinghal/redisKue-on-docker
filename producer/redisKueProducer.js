// === BEGIN: KUE SETUP ===
var kue = require('kue');

var queue = kue.createQueue({
  redis: process.env.REDIS_URL,
  disableSearch: true
});
// === END: KUE SETUP ===

var minInterval = 1;
var interval = minInterval;
var exponent = 2;
var maxInterval = 60;

var runCounter = 0;

var setupJob = function() {
  var job = queue.create('crawl', {
    url: 'http://example.com'
    , token: 'foo'
  });
  /*job.on('complete', function(){
    console.log("Job complete");
  }).on('failed', function(){
      res.send("Job failed");
    }).on('progress', function(progress){
      console.log('job #' + job.id + ' ' + progress + '% complete');
    });*/
  job.save();
  console.log('====', 'created job #', ++runCounter, '====');
};

var startProducer = function() {
  //var msg = queue.GetMessage();
  // maybe you get a message for Q, maybe you don't
  var myArray = ['value', null, null];
  var msg = myArray[Math.floor(Math.random() * myArray.length)];

  if (msg != null)
  {
    interval = minInterval;
    console.log('Interval reset to %d seconds', interval);

    // TODO: do something queue.DeleteMessage(msg);
    setupJob();

    startProducer();
  }
  else
  {
    console.log('Sleep for %d seconds', interval);
    // timeout after interval
    setTimeout(function() {
      startProducer();
    }, interval*1000);
    interval = Math.min(maxInterval, interval * exponent);
    console.log('Interval extended to %d seconds', interval);
  }
};

startProducer();