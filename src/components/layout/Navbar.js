import {Link } from "react-router-dom";
import style from './Navbar.module.css'
import logo from '../../img/costs_logo.png'
import Container from "./Container";

function Navbar(){
  return(

  
  <nav className={style.navbar}>
    <Container>
      <Link to="/"><img src={logo} alt="Costs"></img></Link>

      <ul className={style.list}>
        
        <li className={style.item}>
        <Link to="/">Home</Link>
        </li>
        
        <li className={style.item}>
        <Link to="/projetos">Projetos</Link>
        </li>

        <li className={style.item}>
        <Link to="/sobre">Sobre</Link>
        </li>

        <li className={style.item}>
        <Link to="/contato">Contato</Link>
        </li>

      </ul>
      
  
    </Container>
  </nav>

  )
}

export default Navbar