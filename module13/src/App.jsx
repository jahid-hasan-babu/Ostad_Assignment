import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Service from './pages/Service'
import About from './pages/About'
import Project from './pages/Project'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import AppNav from './components/AppNav'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <AppNav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
