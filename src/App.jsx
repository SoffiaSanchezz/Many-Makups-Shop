import { useState } from 'react'

import Home from '  ./Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='*' element={<div>404 Not Found</div>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
