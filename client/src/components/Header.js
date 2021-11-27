import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <Link to="/" className="mr-4">Home</Link>
            <Link to="/cart" className="mr-4">Cart</Link>
        </div>
    )
}

export default Header
