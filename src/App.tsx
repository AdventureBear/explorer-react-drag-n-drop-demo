import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import  './DragNDrop.jsx'
import DragAndDropTemplate from "./DragNDrop.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
  <DragAndDropTemplate />
  )
}

export default App
