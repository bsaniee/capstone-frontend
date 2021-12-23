import {Link} from "react-router-dom"
import styled from "styled-components"

const Title = styled.div`
    font-size: 30px; 
    color: Black;
`
const Navig = styled.nav`
    background-color: lightblue;
`

const Header = (props) => {
    return (
        <Navig>
            <Link to="/">
                <Title>
                    <h1>Bijan's Movie List</h1>
                </Title>
            </Link>
        </Navig>
    )
}

export default Header