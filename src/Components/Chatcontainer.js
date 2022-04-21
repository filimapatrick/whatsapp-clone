import React,{useState} from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import Picker from 'emoji-picker-react';

import ChatMessage from './ChatMessage';



function Chatcontainer() {
const[message, setMessage]= useState('');
const [openEmojiBox, setOpenEmojiBox] = useState(false);


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
     <ChatMessage message='Hello, How are you?' time='14-12-2021'/>
     <ChatMessage message='Hello, How are you?' time='14-12-2021'/>
     <ChatMessage message='Hello, How are you?' time='14-12-2021'/>
     <ChatMessage message='Hello, How are you?' time='14-12-2021'/>
    </div>
  {/* chatinput */}
  <div className='chat-input'>
      {/* button */}
     {/* <Picker/> */}
     {openEmojiBox && (
          <Picker
            onEmojiClick={(event, emojiObject) =>
              setMessage(message + emojiObject.emoji)
            }
          />
        )}


      <div className='chat-input-btn'>
      <InsertEmoticonIcon onClick={() => setOpenEmojiBox(!openEmojiBox)} />
       <AttachFileIcon/>

      </div>
      {/* text Input Element */}

      <form>
          <input type='text' placeholder='Type a Message' value={message} onChange={(e)=>{setMessage(e.target.value)}} />
      </form>
      {/* send button */}
      <div className='chat-input-send-btn'>
        <SendIcon/>
        </div>
  </div>
    </div>
  )
}

export default Chatcontainer