function sendMessage() {
    const sender = document.getElementById("sender").value;
    const message = document.getElementById("message").value;
  
    const messageContainer = document.getElementById("chat-container");
  
    const newMessage = document.createElement("div");
    newMessage.innerHTML = "<strong>" + sender + ":</strong> " + message;
    messageContainer.appendChild(newMessage);
  
    document.getElementById("sender").value = "";
    document.getElementById("message").value = "";
  }
