import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { Provider } from 'react-redux'
import Store from './Redux/Store'



function App() {
  

  return (
    <>
<Provider store={Store} >

    <BrowserRouter>
    <Routes>
      <Route  path='/*' element={<Home />} />
    </Routes>
    </BrowserRouter>
</Provider>
    </>
  )
}

export default App
