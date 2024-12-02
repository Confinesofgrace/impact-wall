
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import CohortList from './Pages/CohortList'
import Homepage from './Pages/Homepage'
import CohortParticipants from './Pages/CohortParticipants'
import Participants from './Pages/Participants'
import About from './Pages/About'


function App() {
  

  return (
    
    <div>
      <BrowserRouter>
      
        <Navbar/>
        

        <Routes>

          <Route path='/' element={ <Homepage/>  } />
          <Route path='cohort-page' element={<CohortParticipants/>} />
          <Route path='participants/:id' element={<Participants/>} />
          <Route path='about' element={<About/> } />
        </Routes>
      </BrowserRouter>
      
      
      
    </div>
        
    
  )
}

export default App
