import {Link} from "react-router-dom"
import styled from "styled-components"

const Title = styled.div`
    font-size: 30px; 
    color: Black;
`

const Header = (props) => {
    return (
        <nav className="nav">
            <Link to="/">
                <Title>
                    <h1>Bijan's Movie List</h1>
                </Title>
            </Link>
        </nav>
    )
}

export default Header