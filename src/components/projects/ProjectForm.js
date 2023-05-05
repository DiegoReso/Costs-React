import { useState,useEffect } from 'react'

import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/Submit'

function ProjectForm({btnText}){


  const[categories,setCategories] = useState([])

  useEffect(()=>{
    
  fetch("http://localhost:5000/categories",{
    method: 'GET',
    headers:{
      'Content-Type': 'application/json',
    },
  }).then((resp) => resp.json())
  .then((data) =>{
    console.log(data)
  },)
  .catch((err) => console.log(err))

  },[])


  return(

    <form className={styles.form}>
      <Input 
        type="text" 
        placeholder="Insira o nome do projeto" 
        name="name" 
        id="text" 
        text="Nome do Projeto"
        htmlFor="name"
        />
      <Input
         type="number" 
         placeholder="Insira o orçamento total" 
         name="orcamento" 
         id="text" 
         text="Orçamento do Projeto"
         htmlFor="orcamento"
      />
      <Select 
        name="category_id"
        text="Selecione a categoria"
        option={categories}
        
      />
      <Submit text={btnText} />

    </form>

  )
}

export default ProjectForm