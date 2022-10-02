const { Socket } = require('net');
const conf = require('./config');


//Create the socket client.
const client = new Socket();

function tick(){
  setTimeout(()=>{
    client.write(`tick::${conf.tickId}`);
  }, 3000)
}

//Connect to the server on the configured port 
client.connect(conf.port, function(){
	//Log when the connection is established
  console.log(`Cleint: Connected to server on port ${conf.port}`);
  tick();  
});

//Handle data coming from the server
client.on('data', function(data){
  if(data.toString() == 'OK'){
    tick();
  }
});

// Handle connection close 
client.on('close', function(){
   console.log('Cleint :Connection Closed');
});

//Handle error
client.on('error', function(error){
   console.error(`Connection Error ${error}`); 
});