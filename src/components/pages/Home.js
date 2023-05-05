import style from './Home.module.css'
import imagemHome from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'



function Home(){
  return(
    <section className={style.home_container}>
      <h1>Bem vindo ao <span>Costs</span></h1>
      <p>Comece a gerenciar seus projetos agora mesmo!</p>
      <LinkButton to="/novoprojeto" text="Criar Projeto"/>
      <img src={imagemHome} alt='Costs'/>
    </section>
  )
}

export default Home