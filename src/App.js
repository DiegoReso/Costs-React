import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NewProject from "./components/NewProject";
import About from "./components/About";
import Footer from "./components/Footer";

import Container from "./components/layout/Container";



function App() {

  return (
<>

  <Router>
   
    <ul>

      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/contato">Contato</Link>
      </li>

      <li>
        <Link to="/sobre">Sobre</Link>
      </li>

      <li>
        <Link to="/novoprojeto">Novo Projeto</Link>
      </li>

    </ul>
   
    <Container customClass='min-height'>
      <Routes>
        
          <Route exact path="/" element={<Home/>}></Route>
          <Route  path="/contato" element={<Contact/>}></Route>
          <Route  path="/sobre" element={<About/>}></Route>
          <Route  path="/novoprojeto" element={<NewProject/>}></Route>
        
      </Routes>
    </Container>

    </Router>
    
    <Footer/>
</>
  );
}

export default App;
