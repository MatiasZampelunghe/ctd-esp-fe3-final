import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'

const Navbar = () => {

    const { Theme, handleThemeChange } = useContext(ContextGlobal)

    return (
        <nav className='navbar' style={{background:Theme.backgroundNavbar, color:Theme.color}}>
            <Link to={'/'}><h2>D<span color='blue'>H</span> Odonto</h2></Link>
            <div>
                <Link to={'/'}>Home</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/favorites'}>Favorites</Link>
                <i className={(Theme.color === 'black') ? "fa-solid fa-moon" : "fa-solid fa-sun"} onClick={handleThemeChange}></i>
            </div>
        </nav>
    )
}

export default Navbar