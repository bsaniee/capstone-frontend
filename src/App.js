import Header from "./components/Header";
import Main from "./components/Main";
import styled from "styled-components"

const Home = styled.section`
    background-color: lightblue;
    text-align: center;
`

function App() {
  return (
    <Home>
      <Header />
      <Main />
    </Home>
  );
}

export default App;
