import { useState } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Dest from './pages/Dest/Dest';
import Crew from './pages/Crew/Crew';
import MobileMenu from './components/MobileMenu/MobileMenu';

function App() {
  const [siteManager, setSiteManager] = useState({
    menuToggled: false,
  })

  const toggleMenu = () => {
    setSiteManager(prev => {
      const {menuToggled: toggled} = prev
      return {...prev, menuToggled: !toggled}
    })
  }

  const {menuToggled: toggled} = siteManager

  return (
    <div className='app'>
      <Router>
        <Navbar toggled={toggled} toggleMenu={toggleMenu}/>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/destination' element={<Dest />}/>
          <Route path='/crew' element={<Crew />}/>
        </Routes>
        {toggled && <MobileMenu />}
      </Router>
    </div>
  )
}

export default App
