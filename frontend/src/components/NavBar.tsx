import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <div className="navbar bg-primary shadow-sm">
                <div className="navbar-start">
                    <Link to="/">Movie App</Link>
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/favorites">Favorites</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="btn bg-base-content btn-ghost btn-circle avatar"></div>
                </div>
            </div>
        </>
    );
}

export default NavBar;

