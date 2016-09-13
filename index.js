var app=require('express')();
var http=require('http').Server(app);
var io=require('socket.io')(http);


app.get('/',function(request,response){
    console.log('Got GET request for index.html...');
    response.sendFile(__dirname+'/index.html');
});

io.sockets.on('connection',function(socket){
    console.log('A user is connected...');
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        io.sockets.emit('new message',msg);
    });
});

http.listen(3000,function(){
    console.log('server runnning on port:3000....');
});

