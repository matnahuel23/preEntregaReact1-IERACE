import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        <nav className = "NavBar" class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <Link to='/' class="navbar-brand">
                    <h3>MatNahuel</h3>
                </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div className='Categories' class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <NavLink to={`category/terror`} class="nav-link active" className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>
                            Terror
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to={`category/suspenso`} class="nav-link active" className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>
                            Suspenso
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to={`category/comedia`} class="nav-link active" className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>
                            Comedia
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to={`category/romantica`} class="nav-link active" className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>
                            Romantica
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to={`category/fantasia`} class="nav-link active" className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>
                            Fantasia
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to={`category/policial`} class="nav-link active" className={({isActive})=> isActive ? 'ActiveOption' : 'Option'} activeClassName="ActiveOption">
                            Policial
                        </NavLink>  
                    </li>
                </ul>
            </div>
            <CartWidget />
            </div>
        </nav>       
    )
}

/* const NavBar = () => {
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
 */

export default NavBar