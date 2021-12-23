import {Link} from "react-router-dom"

const Header = (props) => {
    return (
        <nav className="nav">
            <Link to="/">
                <div>
                    <h1>Add to Bijan's Movie List</h1>
                </div>
            </Link>
        </nav>
    )
}

export default Header