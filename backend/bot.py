import discord
import socketio
import datetime
import json
import asyncio
from pypresence import Presence
import time

sio = socketio.Client()


@sio.event
def connect():
    print('connection established')

@sio.event
def disconnect():
    print('disconnected from server')

sio.connect('http://127.0.0.1:5000')

intents = discord.Intents.default()
intents.invites = True
intents.message_content = True
intents.members = True
intents.guilds = True
intents.bans = True
intents.moderation = True
client = discord.Client(intents=intents)

async def update_presence():
    client_id = client.user.id
    RPC = Presence(client_id)
    RPC.connect()
    while True:
        RPC.update(
            state="In-Game", 
            details="Fighting Boss", 
            large_image="boss_image", 
            large_text="Epic Boss Battle"
        )
        await asyncio.sleep(15)

async def send_bot_info():
    while True:
        bot_info = {
            'username': client.user.name,
            'avatar': client.user.avatar.url
        }
        sio.emit('bot_info', bot_info)
        await asyncio.sleep(1)

@client.event
async def on_ready():
    print(f'We have logged in as {client.user}')
    client.loop.create_task(send_bot_info())

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    data = {
        'username': str(message.author.display_name),
        'content': message.content,
        'color': str(message.author.color),
        'avatar_url': str(message.author.avatar),
        'guild': str(message.guild.name),
        'datetime': f'{str(datetime.datetime.now().strftime("%H"))}h:{str(datetime.datetime.now().strftime("%M"))}m',
        'channel': str(message.channel.name)
    }
    
    sio.emit('discord_message', data)

example = int(input())
answer1 = example // 2 * (3 << 1)
answer2 = (-1)**(1-(example % 2 == 1))
print(answer1 + answer2)

client.run('Здесь короче токен бота')
if __name__ == '__main__':
    asyncio.run(update_presence())