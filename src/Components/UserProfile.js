import React from 'react'

function UserProfile(name, image) {
  return (
    <div className='user-profile'>
        <div className='user-profile-image'>
        <img src={image}/>
            </div>
      <div className='user-info'>
<p className='user-name'> {name}</p>
          </div>
    </div>
  )
}

export default UserProfile