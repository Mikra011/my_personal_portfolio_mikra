import '../styles/App.css'
// import { useNavigate } from "react-router-dom"
import { Routes, Route, Link } from 'react-router-dom'
import About from "./About"
import Projects from "./Projects"
import Contacts from "./Contacts"
import Home from './Home'

function App() {
  // const navigate = useNavigate()

  // const routeToSite = () => {
  //   navigate('home')
  // }

  return (
    <div>
      <nav>
        <h1>Mikra Portfolio Site</h1>
        <div className='nav-links'>
          {/* 👉 STEP 3 - Make Links to navigate us Home (`/`) and Shop (`items-list`) */}
          <Link to='home' >Home</Link>
          <Link to='about' >About</Link>
          <Link to='projects' >Projects</Link>
          <Link to='contacts' >Contacts</Link>
        </div>
      </nav>

      {/* 👉 STEP 4 - Build Routes, and a Route for each of the components imported at the top */}
      {/* Note that the components will need some props in order to work */}
      {/* Note that the path that renders Item has a URL parameter */}
      {/* Note that the path that renders Item must support nested routes */}
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='projects' element={<Projects />} />
        <Route path='contacts' element={<Contacts />} />
      </Routes>
      
    </div>
  )
}

export default App
