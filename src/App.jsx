import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import WorksPage from './pages/WorksPage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/works' element={<WorksPage />}/>
        <Route path='/services' element={<ServicesPage />}/>
        <Route path='/blog' element={<BlogPage />}/>
        <Route path='/contact' element={<ContactPage />}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
