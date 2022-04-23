import React from 'react'
import TollIcon from '@mui/icons-material/Toll';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import UserProfile from './UserProfile';


function Sidebar({currentUser, signOut}) {
  return (
    <div className='sidebar'>
        <div className='sidebar__header'>
            <div className='sidebar_header_image' onClick={signOut} >
           <img src={currentUser.photoURL}/>
                </div>
                <div className='sidebar_header_btn'>
                    <TollIcon/>
                    <InsertCommentIcon/>
                    <MoreVertIcon/>
                    </div>
                </div>

<div className='sidebar__search'>
    <div className='sidebar_search_input'>
    <SearchIcon/>
    <input type='text' placeholder='Search or tart new chat'/>
    </div>
    </div>

<div className='sidebar-chat-list'>
<UserProfile name='John' photoURL='./user.png'/>
<UserProfile name='Andrew' photoURL='./user.png'/>
<UserProfile name='James' photoURL='./user.png'/>
<UserProfile name='Jerry' photoURL='./user.png'/>
<UserProfile name='Jerry' photoURL='./user.png'/>
<UserProfile name='Jerry' photoURL='./user.png'/>
<UserProfile name='Jerry' photoURL='./user.png'/>
<UserProfile name='Jerry' photoURL='./user.png'/>








</div>
    </div>
  )
}

export default Sidebar