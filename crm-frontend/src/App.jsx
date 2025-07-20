import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloComponent from './components/hello'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 class="bg-red-600 text-3xl font-bold underline">
    Hello world!
  </h1>
   <h1 class="bg-green-600 text-3xl font-bold underline">
    Hello world!
  </h1>
  <HelloComponent/>
  </>
  )
}

export default App
