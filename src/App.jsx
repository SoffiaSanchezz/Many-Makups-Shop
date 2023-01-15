import { useState } from 'react'

import Home from './Pages/Home'
import Brochas from './Pages/Brochas'
import Sombras from './Pages/Sombras'
import Facial from './Pages/Facial'
import Accesorios from './Pages/Accesorios'
import Labios from './Pages/Labios'
import Cejas from './Pages/Cejas'
import Ojos from './Pages/Ojos'
import Capilar from './Pages/Capilar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Brochas' element={<Brochas/>} />
          <Route path='/Sombras' element={<Sombras/>} />
          <Route path='/Facial' element={<Facial/>} />
          <Route path='/Accesorios' element={<Accesorios/>} />
          <Route path='/Labios' element={<Labios/>} />
          <Route path='/Cejas' element={<Cejas/>} />
          <Route path='/Ojos' element={<Ojos/>} />
          <Route path='/Capilar' element={<Capilar/>} />
          <Route path='*' element={<div>404 Not Found</div>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
