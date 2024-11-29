
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import CohortList from './Pages/CohortList'
import CohortParticipants from './Pages/CohortParticipants'


function App() {
  

  return (
    
    <div>
      <BrowserRouter>
      
        <Navbar/>
        <CohortParticipants/>

        <Routes>
          
        </Routes>
      </BrowserRouter>
      
      
      
    </div>
        
    
  )
}

export default App
