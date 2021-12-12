let websocket = new WebSocket(`ws://${window.location.hostname}:${window.location.port}/websocket-endpoint`)
// establish the websocket connection

// console.log('Websock load doneeeeee')

function send_key (key) {
    websocket.send(key)
}

document.getElementById('one').addEventListener("click", function () {
    // console.log('lol')
    send_key(1)
  });
  
  document.getElementById('two').addEventListener("click", function () {
    send_key(2)
  });
  
  
  document.getElementById('three').addEventListener("click", function () {
    send_key(3)
  });
  
  
  document.getElementById('four').addEventListener("click", function () {
    send_key(4)
  });
  
  
  document.getElementById('five').addEventListener("click", function () {
    send_key(5)
  });
  
  
  document.getElementById('six').addEventListener("click", function () {
    send_key(6)
  });
  
  
  document.getElementById('seven').addEventListener("click", function () {
    send_key(7)
  });
  
  
  document.getElementById('eight').addEventListener("click", function () {
    send_key(8)
  });
  
  
  document.getElementById('nine').addEventListener("click", function () {
    send_key(9)
  });
  
  
  document.getElementById('zero').addEventListener("click", function () {
    send_key(0)
  });
  
  
  document.getElementById('decimal').addEventListener("click", function () {
    send_key(10)
  });
  
  
  document.getElementById('plus').addEventListener("click", function () {
    send_key(11)
  });
  
  document.getElementById('minus').addEventListener("click", function () {
    send_key(12)
  });
  
  
  document.getElementById('times').addEventListener("click", function () {
    send_key(13)
  });
  
  
  document.getElementById('divide').addEventListener("click", function () {
    send_key(14)
  });
  
  document.getElementById('enter-button').addEventListener("click", function () {
    send_key(15)
  });
  
  document.getElementById('backspace-button').addEventListener("click", function () {
    send_key(16)
  });