import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='grid grid-cols-4 ml-4 gap-2'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        
      </div>
    </>
  )
}

export default App
