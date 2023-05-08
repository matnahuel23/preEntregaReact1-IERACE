import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className = "NavBar">
            <Link to='/'>
                <h3>MatNahuel</h3>
            </Link>
            <div className='Categories'>
                <NavLink to={`category/terror`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>
                    Terror
                </NavLink>
                <NavLink to={`category/suspenso`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>
                    Suspenso
                </NavLink>
                <NavLink to={`category/comedia`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>
                    Comedia
                </NavLink>
                <NavLink to={`category/romantica`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>
                    Romantica
                </NavLink>
                <NavLink to={`category/fantasia`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>
                    Fantasia
                </NavLink>
                <NavLink to={`category/policial`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>
                    Policial
                </NavLink>
            </div>
            <CartWidget />
        </nav>       
    )
}

export default NavBar