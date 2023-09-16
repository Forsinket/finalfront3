import { Link, useNavigate } from 'react-router-dom'
import {  useGlobalContext } from './utils/global.context'
import "../Styles/navbarStyles.css"


const Navbar = () => {

  const {stateTheme, dispatchTheme} =  useGlobalContext()

  const changeTheme = ()=>{
    if (stateTheme.t) {
      dispatchTheme({type: 'SWITCH_DARK'}) 
    } else {dispatchTheme({type: 'SWITCH_LIGHT'})} 
  }


  return (
  <div className="navbar">
      <div className='odonto'>
          <h4>DH Odonto</h4>
      </div>
      <nav> 
      
        {}
        <Link  to="/"><p className='nav-h3' >Home</p></Link>
        <Link  to="/contact"><p className='nav-h3'>Contact</p></Link>
        <Link  to="/favs"><p className='nav-h3'>Favs</p></Link>

        {}
        <button className="theme-btn"  onClick={changeTheme } >{stateTheme.t? 'Dark Mode 🌑' : 'Day Mode 🔦'} </button>
      </nav>
    </div>
  )
}


export default Navbar