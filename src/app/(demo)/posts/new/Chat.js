'use client' // client
import React, { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import './chat.css'
function Chat() {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const canvasRef = useRef(null);
  const chatRef = useRef(null);
  const messagesRef = useRef(null);

  const handleLinkClick = (e) => {
    e.preventDefault();
    window.location.href = '/';
  };

  useEffect(() => {
    const newSocket = io('http://localhost:5000');
    setSocket(newSocket);

    newSocket.on('new_message', (data) => {
      console.log('Received message:', data);  
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => newSocket.close();
  }, []);
  useEffect(() => {
    const chat = chatRef.current;
    const messages = messagesRef.current;

    messages.classList.add('appear');
  }, []);

  return (
    <div className="chat-container">
      <div className="header">
      </div>
      <div ref={messagesRef} className="messages">
        {messages.length === 0 ? (
          <div className="no-messages">Сообщений нет</div>
        ) : (
          messages.map((msg, index) => (
            <div key={index} className={`message ${index === messages.length - 1 ? 'appear' : ''}`}>
              <img src={msg.avatar_url} alt="avatar" className="avatar" />
              <div className="message-content">
                <span className="username" style={{ color: msg.color }}>{msg.username}&nbsp;</span>
                <span className="guild-name">({msg.guild}, {msg.channel}):&nbsp;</span>
                <span className="message-text">{msg.content} ({msg.datetime})</span>
              </div>
            </div>
          ))
        )}
      </div>
      </div>
  );
}

export default Chat;