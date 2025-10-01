const ChatRoom = require("./chatRoom.js");

const chat = new ChatRoom();

chat.on("join", (user) => {
  console.log(`${user} Joined the chat`);
});

chat.on("sendMessage", (user, message) => {
  console.log(`${user}: ${message}`);
});

chat.on("leave", (user) => {
  console.log(`${user} has left the chat`);
});

chat.join("Alice");
chat.join("Bob");
chat.sendMessage("Alice", "Hello Everyone, Alice Here");
chat.sendMessage("Bob", "Hey Alice, Bob here");
chat.join("Alice");
chat.leave("Alice");
chat.sendMessage("Alice", "Bys guys!");
chat.leave("Bob");
chat.leave("bob");
