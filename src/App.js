import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import NewProject from "./components/pages/NewProject";
import About from "./components/pages/About";
import Footer from "./components/layout/Footer";
import Projects from "./components/pages/Projects";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";


function App() {

  return (
<>

  <Router>
  <Navbar/>

  <Container customClass='min-height'>

    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route  path="/contato" element={<Contact/>}></Route>
      <Route  path="/sobre" element={<About/>}></Route>
      <Route  path="/novoprojeto" element={<NewProject/>}></Route>
      <Route  path="/projetos" element={<Projects/>}></Route>
    </Routes>

  </Container>

  </Router>
    
  <Footer/>
</>
  );
}

export default App;
