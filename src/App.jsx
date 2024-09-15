
import { Outlet } from 'react-router-dom'
import './App.css'
import MainLayOut from './components/layout/MainLayOut'

function App() {

  return (
    <MainLayOut>
      <Outlet></Outlet>
    </MainLayOut>
  )
}

export default App
