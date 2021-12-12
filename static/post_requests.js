
async function postData(data = {}) {
  // Default options are marked with *
  const response = await fetch('', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json();
}

// the below lines are the worst code i ever wrote

document.getElementById('one').addEventListener("click", function () {
  // console.log('lol')
  postData({ "key": 1 })
});

document.getElementById('two').addEventListener("click", function () {
  postData({ "key": 2 })
});


document.getElementById('three').addEventListener("click", function () {
  postData({ "key": 3 })
});


document.getElementById('four').addEventListener("click", function () {
  postData({ "key": 4 })
});


document.getElementById('five').addEventListener("click", function () {
  postData({ "key": 5 })
});


document.getElementById('six').addEventListener("click", function () {
  postData({ "key": 6 })
});


document.getElementById('seven').addEventListener("click", function () {
  postData({ "key": 7 })
});


document.getElementById('eight').addEventListener("click", function () {
  postData({ "key": 8 })
});


document.getElementById('nine').addEventListener("click", function () {
  postData({ "key": 9 })
});


document.getElementById('zero').addEventListener("click", function () {
  postData({ "key": 0 })
});


document.getElementById('decimal').addEventListener("click", function () {
  postData({ "key": 10 })
});


document.getElementById('plus').addEventListener("click", function () {
  postData({ "key": 11 })
});

document.getElementById('minus').addEventListener("click", function () {
  postData({ "key": 12 })
});


document.getElementById('times').addEventListener("click", function () {
  postData({ "key": 13 })
});


document.getElementById('divide').addEventListener("click", function () {
  postData({ "key": 14 })
});

document.getElementById('enter-button').addEventListener("click", function () {
  postData({ "key": 15 })
});

document.getElementById('backspace-button').addEventListener("click", function () {
  postData({ "key": 16 })
});