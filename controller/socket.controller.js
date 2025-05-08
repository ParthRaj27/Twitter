exports.chatsocket = (socket) => {
    socket.on("typing" , (data)=>{
        socket.broadcast.emit("typing",data)
    })
    socket.on("stopTyping" , (data)=>{
        socket.broadcast.emit("stopTyping",data)
    })
    socket.on('join', (id) => {
      if (!id) {
        console.error('Invalid room ID:', id);
        return;
      }
      socket.join(id.toString());
    });
  
    socket.on('chat', (data) => {
      if (!data || !data.id) {
        console.error('Invalid chat data:', data);
        return;
      }
      // io.to used to send message to room like sender and receiver both can read message
      // io.to(data.id.toString()).emit('notifi ', data);
      // socket.to used to send message to room only receiver can read message
      socket.to(data.id.toString()).emit('chat', data);
      console.log(data);
    });
  };