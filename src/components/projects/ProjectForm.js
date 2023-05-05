import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/Submit'

function ProjectForm({btnText}){
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
        
      />
      <Submit text={btnText} />

    </form>

  )
}

export default ProjectForm