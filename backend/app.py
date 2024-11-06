from flask import Flask, jsonify, request
from flask_socketio import SocketIO, send, emit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins="*")

@socketio.on('bot_info')
def handle_bot_info(bot_info):
    ('Received bot info', bot_info)
    emit('bot_info', bot_info, broadcast=True)

@socketio.on('message')
def handle_message(message):
    print(f"Received message: {message}")
    send(f"Echo: {message}", broadcast=True)

@socketio.on('discord_message')
def handle_discord_message(data):
    print(f"Received message from Discord: {data}")
    emit('new_message', data, broadcast=True)

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000)
