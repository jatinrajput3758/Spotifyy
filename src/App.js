import React, { useContext } from 'react'
import Sidebar from './Components/Sidebar'
import Player from './Components/Player'
import DISPLAYJSX from './Components/Display'
import { PlayerContext } from './Contexts/PlayerContext'


const App = () => {

  const { audioRef, track } = useContext(PlayerContext)
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <DISPLAYJSX />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>

  )
}

export default App