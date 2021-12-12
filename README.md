# the-cheapest-numberpad-ever
The cheapest keypad ever allows your phone to work as a keypad for your computer

To use, have python3 installed, also, this project is only been tested on Linux so keep that in mind
## to use, 

1. Clone the repo,
2. Install the dependencies via `sudo pip3 install -r requirements.txt` (the sudo is required becuase the keyboard module used in the project writes directly to device files to avoid a dependency on X, hence, this project should also work on wayland)
3.Start the server via the command `sudo uvicorn main:app --host 0.0.0.0`

Then, after the server has started and initialized, grab a phone or any other portable device you want to you as your numpad, open the browser, visit the website http://<<your local ip>>:8000, replace <<your local ip>> with your local IP address of the computer (host) on the network, example http://192.168.1.4:8000
  
Enjoy :)
  
## Changing settings
  
To change the settings, you can edit the config.json file, as of now only two this are configureable via this file, the theme more (dark is default, changable to light) and the protocol used for interacting with the server and sending the keypresses, default is websockets which should be faster, but can be changed to http which is more tested and has pretty good reliabilty
  
## Security
  
This app technically exposes a keyboard **with sudo perms** over the network, although the numbers are checked to ensure that they are just that, numbers and not malicious code, but the data is still sent over to the app via http and non encrypted websockets, that is, basically plain text, so i recommend only using this on your trusted home network and not on public wifi, beware, you have been warned
  
 This project is licensed under GPLv3
