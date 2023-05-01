import style from './Footer.module.css'
import {FaFacebook,FaInstagram,FaLinkedin} from 'react-icons/fa'

function Footer(){
  return(
    <footer>
      <p>Diego Reis &copy; </p>
      <ul>
        <li>
        <FaFacebook/>
        </li>
        <li>
        <FaInstagram/>
        </li>
        <li>
        <FaLinkedin/>
        </li>
      </ul>
      </footer>

  )
}

export default Footer