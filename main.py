from fastapi import FastAPI, WebSocket
from fastapi.responses import HTMLResponse, FileResponse
import models
import keyboard

app = FastAPI()

async def key_checker_and_sender(key):
    if key >= 0 and key <= 9:
        keyboard.send(str(key))
    elif key == 10:
        keyboard.send('.')
    elif key == 11:
        keyboard.send('+')
    elif key == 12:
        keyboard.send('-')
    elif key == 13:
        keyboard.send(55) # 55 is the 'scan code' for an asterisk '*' which is used as a multiplication sign
    elif key == 14:
        keyboard.send('/')
    elif key == 15:
        keyboard.send('enter')
        pass
    elif key==16:
        keyboard.send('backspace')
        pass


## if the key here is between 0 - 9, its the code for the corrosponding number, 10 - 15 are assigned arbitrarily to symbols
@app.post('/')
async def key(key: models.Key):
    key = key.key
    # print(key)
    await key_checker_and_sender(key)

@app.get('/')
async def main():
    with open('static/index.html') as file:
        return HTMLResponse(file.read())

# The below two functions are just bad code, im just lazy tho and this is a side project, also, i regret using fastapi for this

@app.get('/post_requests.js')
async def get_js():
    return FileResponse('static/post_requests.js')

@app.get('/style.css')
async def get_js():
    return FileResponse('static/style.css')

@app.get('/config.json')
async def return_config():
    return FileResponse('config.json')
    pass

@app.get('/scout.js')
async def return_config():
    return FileResponse('static/scout.js')
    pass

@app.websocket('/websocket-endpoint')
async def websocket_key(websocket: WebSocket):
    print('here')
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        try:
            key = int(data)
            if key <= 16:
                await key_checker_and_sender(key)
        
        except:
            print('key not valid')

@app.get('/websocket.js')
async def send_websocket_js():
    return FileResponse('static/ws.js')