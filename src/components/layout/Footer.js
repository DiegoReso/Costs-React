import style from './Footer.module.css'
import {FaFacebook,FaInstagram,FaLinkedin} from 'react-icons/fa'

function Footer(){
  return(
    <footer>
      <p className={style.text}>Diego Reis &copy; <span>2023</span> </p>
      <ul className={style.listul}>
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