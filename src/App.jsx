import { useState } from 'react'
import './App.css'
import Player from './Player'
import Players from './Players'

function App() {

  return (
    <>
    <Players amount={4} finalScore={3} />
    </>
  )
}

export default App
