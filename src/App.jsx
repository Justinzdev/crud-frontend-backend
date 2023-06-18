import './App.css'
import { Routes, Route } from 'react-router-dom'

// Components
import Topbar from './components/Topbar'
import Lists from './components/Lists'
import Create from './components/Create'

function App() {
  return (
    <>
        <Topbar />
        <Routes>
            <Route path='/' element={<Lists />} />
            <Route path='/create' element={<Create />} />
        </Routes>
    </>
  )
}

export default App
