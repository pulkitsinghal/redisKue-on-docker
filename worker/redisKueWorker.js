var kue = require('kue')

var queue = kue.createQueue({
  redis: process.env.REDIS_URL
});

queue.process('email', function(job, done){
  console.log('inside queue.process("email")');
  doSomething(job.data, done);
  exit();
});

queue.process('crawl', function(job, done){
  console.log('inside queue.process("crawl")');
  doSomething(job.data, done);
  exit();
});

function doSomething(payload, done) {
  console.log('successfully ran the job');
  console.log('payload', payload);
  done();
}

function exit(){
  queue.shutdown( 5000, function(err) {
    console.log( 'Kue shutdown', err||'' );
    process.exit( 0 );
  });
}