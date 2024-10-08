import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';

function App() {

  return (
      <>
      <Navbar />
          <Routes>
            <Route path={'/'} element = {<Home />}/>
            <Route path={'about'} element = {<About />}/>
            <Route path={'contact'} element = {<Contact />}/>
            <Route path={'services'} element = {<Services />}/>
          </Routes>
      </>
  )
}

export default App;
