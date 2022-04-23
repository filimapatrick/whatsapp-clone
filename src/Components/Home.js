import React from 'react'
import Sidebar from './Sidebar'

function Home({currentUser}) {
  return (
    <div className='home'>
        <div className='home__container'>
  <Sidebar currentUser={currentUser}/>
          

            <div className='home-bg'>
              <img src='./WhatsAppbg.png' alt='whatsapp'/>
            </div>
            </div>
    </div>
  )
}

export default Home