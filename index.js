const { Server } = require("socket.io");

const io = new Server({ cors: { origin: '*' }});

io.on("connection", (socket) => {
    console.log('connected! - ' + socket.id)

    socket.on('message', msg => socket.emit('sendback', msg))
});


io.listen(4000); 