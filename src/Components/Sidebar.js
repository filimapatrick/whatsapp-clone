import React from 'react'
import TollIcon from '@mui/icons-material/Toll';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import UserProfile from './UserProfile';


function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar__header'>
            <div className='sidebar_header_image'>
           <img src='./user.png' alt='profile'/>
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
    <input type='text' placeholder='Search or start new chat'/>
    </div>
    </div>

<div className='sidebar-chat-list'>
<UserProfile/>
<UserProfile/>
<UserProfile/>
<UserProfile/>
<UserProfile/>
<UserProfile/>

</div>
    </div>
  )
}

export default Sidebar