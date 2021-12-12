console.log("Hello, I am scout")

function handle_theme (theme) {
    if (theme === 'dark') {
        document.body.style.backgroundColor = '#1c1c1c'
    }

    else if (theme === 'light') {
        document.body.style.backgroundColor = '#ffffff'
    } 
    else {
        alert("This theme does not exist, correct the config.json")
    }
}

function handle_protocol (protocol) {
    if (protocol === 'http') {
        console.log('loading http script')
        let post_request_script = document.createElement('script');
        post_request_script.src = '/post_requests.js';
        document.head.append(post_request_script)
    }    

    if (protocol === 'websocket') {
        console.log('loading websocket script')
        let post_request_script = document.createElement('script');
        post_request_script.src = '/websocket.js';
        document.head.append(post_request_script)
    }
}

function parse_config (data) {
    handle_theme(data.theme)
    handle_protocol(data.protocol)
}

fetch('/config.json')
  .then(response => response.json())
  .then(data => parse_config(data));

