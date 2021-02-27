
import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message/Message'

import './messages.css';


const Messages = ({name,messages} ) => {
  return (
    <ScrollToBottom className="messages">
    {messages.map((message, i) => <div key={i}><Message name={name} message={message} /></div>)}
    <script>
      
    </script>
  </ScrollToBottom>
    
  )
};

export default Messages