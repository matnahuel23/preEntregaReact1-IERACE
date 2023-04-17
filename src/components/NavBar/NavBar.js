import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
        <nav>
            <h3>MatNahuel Sports</h3>
            <div>
                <button>Zapatillas</button>
                <button>Remeras</button>
                <button>Pantalones</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar