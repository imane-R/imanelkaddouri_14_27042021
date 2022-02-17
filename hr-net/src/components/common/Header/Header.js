import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div>
            <div className="header">
                <Link to="/">
                    <h1>HRNet</h1>
                </Link>
                <nav className="listNav">
                    <Link to="/list">
                        View Current Employees
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default Header

