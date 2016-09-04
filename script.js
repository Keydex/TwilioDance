var socket = io.connect('http://162.243.79.116:4000');
    socket.emit('news', "helloworld");

  console.log("script.js works!")

