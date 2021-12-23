import {Link} from "react-router-dom"

const Header = (props) => {
    return (
        <nav className="nav">
            <Link to="/">
                <div>
                    <h1>Yellow Book Road <i class="fa fa-road" aria-hidden="true"></i></h1>
                </div>
            </Link>
        </nav>
    )
}

export default Header