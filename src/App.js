import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Componets/NavBar'
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact'
import Footer from './Componets/Footer';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route index element={<Home />} /> 
    <Route path="about" element={<About />} />
    <Route path="service" element={<Service />} />
    <Route path="contact" element={<Contact />} />
      
    </Routes>
  </BrowserRouter>

  );
}

export default App;
