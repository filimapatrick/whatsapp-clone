import React from 'react'
import Sidebar from './Sidebar'

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
  <Sidebar/>
          

            <div className='home-bg'>
              <img src='./WhatsAppbg.png' alt='whatsapp'/>
            </div>
            </div>
    </div>
  )
}

export default Home