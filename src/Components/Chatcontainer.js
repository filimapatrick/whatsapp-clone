import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatMessage from './ChatMessage';
function Chatcontainer() {
  return (
    <div className='chat-container'>
    <div className='chat-container-header'>
        <div className='chat-user-info'>
            <div className='chat-user-img'>
                <img src='./user.png' alt=''/>
            </div>
            <p>John Cena</p>
        </div>
        <div className='chat-container-header-btn'>
            <MoreVertIcon/>
        </div>
    </div>
    {/* chatdisplay container */}
    <div className='chat-display-container'>
     <ChatMessage/>
    </div>
  {/* chatinput */}
    </div>
  )
}

export default Chatcontainer