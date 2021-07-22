import Header from "./components/Header";
import Footer from "./components/Footer"
import { Container, Row } from "react-bootstrap";
import "./style.css"

function App() {
  //const [sectionSelected, setSectionSelected] = useState("");
  return (
    <>
        <Header/>
        <Container className="container" fluid>
          <Footer/>
        </Container>
        
        
    </>
  )
}

export default App;
