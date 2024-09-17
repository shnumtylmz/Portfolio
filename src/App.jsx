import './App.css'
import { PortfolioProvider } from './context/PortfolioContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import WorksPage from './pages/WorksPage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
function App() {

  return (
    <>
  <PortfolioProvider>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/works' element={<WorksPage />}/>
        <Route path='/services' element={<ServicesPage />}/>
        <Route path='/blog' element={<BlogPage />}/>
      </Routes>
    </Router>
  </PortfolioProvider>
      
    </>
  )
}

export default App
