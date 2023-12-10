import {NavLink } from 'react-router-dom'
import "./AppNav.css"


const AppNav = () => {
  return (
    <div className='main__container'>
    <div className="container">
    <div className='nav__style'>
        <div className="logo">
            <h1>JahiD</h1>
        </div>
    <div>
    <ul>
      <li ><NavLink  className={({isActive})=>isActive?"active-item":""}  to="/">Home</NavLink></li> 
      <li><NavLink className={({isActive})=>isActive?"active-item":""}  to="/about">About</NavLink></li>
      <li> <NavLink className={({isActive})=>isActive?"active-item":""}   to="/service">Service</NavLink></li>
      <li><NavLink className={({isActive})=>isActive?"active-item":""}  to="/blog">Blog</NavLink></li>
      <li><NavLink className={({isActive})=>isActive?"active-item":""}  to="/project">Project</NavLink></li>
      <li><NavLink className={({isActive})=>isActive?"active-item":""}  to="/contact">Contact</NavLink></li>
     </ul>
    </div>
     </div>
    </div>
    </div>
  )
}

export default AppNav
