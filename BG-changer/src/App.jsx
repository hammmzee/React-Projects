import { useState } from 'react'
import './App.css'
import Button from './components/button'

function App() {
  let theButtons = ["blue", "green", "orange", "red", "aqua", "indigo", "pink", "purple"]

  let [theColor, setColor] = useState('bg-black')

  return (
    <>
      <div className={`${theColor} min-h-screen text-white flex justify-center gap-[5px] items-end pb-14`}>
        <Button color={theButtons[0]} onClick={() => setColor("bg-blue-600")} />
        <Button color={theButtons[1]} onClick={() => setColor("bg-green-600")} />
        <Button color={theButtons[2]} onClick={() => setColor("bg-orange-500")} />
        <Button color={theButtons[3]} onClick={() => setColor("bg-red-600")} />
        <Button color={theButtons[4]} onClick={() => setColor("bg-cyan-500")} />
        <Button color={theButtons[5]} onClick={() => setColor("bg-indigo-600")} />
        <Button color={theButtons[6]} onClick={() => setColor("bg-pink-600")} />
        <Button color={theButtons[7]} onClick={() => setColor("bg-purple-600")} />
      </div>
    </>
  )
}

export default App
