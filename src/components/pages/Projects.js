import Message from "../layout/Message"
import { useLocation } from "react-router-dom"
import styles from './Projects.module.css'
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton"
import ProjectCard from "../projects/ProjectCard"
import { useState,useEffect } from "react"
import Load from "../layout/Load"

function Projects(){

  const [projects,setProjects] =useState([])
  const [removeLoading,setRemoveLoading] = useState(false)
  const [projectMessage,setProjectMessage] = useState("")


  const location = useLocation()
  let message = ''

  if (location.state){
    message = location.state.message
  }


    useEffect(()=>{
      setTimeout(()=>{
        fetch("http://localhost:5000/projects",{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(resp => resp.json())
        .then(data => {
          setProjects(data)
          setRemoveLoading(true)
        })
        .catch(err => console.log(err))
        
      }, 1000)
    
    },[])

    function removeProject(id){
      fetch(`http://localhost:5000/projects/${id}`,{
        method: 'DELETE',
        headers:{
          'Content-Type': 'application/json'
        },
      }).then(resp => resp.json())
      .then(() =>{
        setProjects(projects.filter((project) => project.id !== id))
        setProjectMessage("Projeto removida com sucesso")
      })
      .catch(err => console.log(err))

    }

  return(
    <div className={styles.project_container}> 
      <div className={styles.title_container}>
      <h1>Meus Projetos</h1>
      <LinkButton to="/novoprojeto" text="Criar Projeto"/>
      </div>
      { message &&  <Message msg={message} type="success"/>}
      { projectMessage &&  <Message msg={projectMessage} type="success"/>}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => <ProjectCard
            name={project.name}
            id={project.id}
            budget={project.budget}
            category={project.category.name}
            key={project.id}
            handleRemove={removeProject}
            />
          )}
          {!removeLoading && <Load/> }
          {removeLoading && projects.length === 0 &&
            <p>Nao ha projetos cadastrados</p>
          }
      </Container>
    </div>
  )
}

export default Projects