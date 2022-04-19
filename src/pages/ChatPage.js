import React from 'react'
import Chatcontainer from '../Components/Chatcontainer'
import Sidebar from '../Components/Sidebar'

function ChatPage() {
  return (
    <div className='chatpage'>
     <div className='chatpage-container'>
         {/* sidebar */}
         <Sidebar/>

{/* chatcontainer */}

<Chatcontainer/>
     </div>
    </div>
  )
}

export default ChatPage