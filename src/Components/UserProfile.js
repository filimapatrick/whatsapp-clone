import React from 'react'

function UserProfile() {
  return (
    <div className='user-profile'>
        <div className='user-profile-image'>
        <img src='./user.png' alt='profile'/>
            </div>
      <div className='user-info'>
<p className='user-name'> John Doe</p>
          </div>
    </div>
  )
}

export default UserProfile