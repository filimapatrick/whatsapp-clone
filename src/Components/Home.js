import React from 'react'
import Sidebar from './Sidebar'

function Home({currentUser,signOut}) {
  return (
    <div className='home'>
        <div className='home__container'>
  <Sidebar currentUser={currentUser} signOut={signOut}/>
          

            <div className='home-bg'>
              <img src='./WhatsAppbg.png' alt='whatsapp'/>
            </div>
            </div>
    </div>
  )
}

export default Home