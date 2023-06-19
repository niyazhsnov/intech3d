import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Home from './components/Pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Notfound from './components/Pages/Notfound/Notfound'
import About from './components/Pages/About/About'
import Footer from './components/Footer/Footer';
import Services from './components/Pages/Services/Services'
import Materials from './components/Pages/Materials/Materials'
import Resources from './components/Pages/Resources/Resources';
import Contact from './components/Pages/Contact/Contact'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
          
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/materials" element={<Materials />} />
        <Route path='/resources' element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>

      
      
    </BrowserRouter>
  )
}

export default App
