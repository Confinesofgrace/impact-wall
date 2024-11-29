
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import CohortList from './Pages/CohortList'
import Homepage from './Pages/Homepage'
import CohortParticipants from './Pages/CohortParticipants'
import Participants from './Pages/Participants'


function App() {
  

  return (
    
    <div>
      <BrowserRouter>
      
        <Navbar/>
        

        <Routes>

          <Route path='/' element={ <Homepage/>  } />
          <Route path='cohort-page' element={<CohortParticipants/>} />
          <Route path='participants' element={<Participants/>} />
        </Routes>
      </BrowserRouter>
      
      
      
    </div>
        
    
  )
}

export default App
