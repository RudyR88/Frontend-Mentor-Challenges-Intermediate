import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {

  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
