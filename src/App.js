import Header from "./components/Header";
import Footer from "./components/Footer"
import { Container } from "react-bootstrap";
import "./style.css"

function App() {
  return (
    <div className="app-container">
      <div>
        <Header/>
      </div>
      <div class="app-footer">
        <div class="app-footer-menu"><Footer/></div>
      </div>
    </div>
    
  )
}

export default App;
