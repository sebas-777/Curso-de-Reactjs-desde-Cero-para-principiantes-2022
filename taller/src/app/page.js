import Image from 'next/image'
import styles from './page.module.css'


// Componentes funcionales 
function Saludar(props) {
  return<h1> are you bitch {props.name}?</h1>
  
} 

//Componentes funcionales
function Chat() {
  return(
    <form>
      <input type ="text" placeholder='Son of a bitch'></input>
      <input type = "submit" value={"Send"}></input>
    </form>
  )
  
}

//Componente funcional 
function MyButton() { 
  return(
    <button>
      Soy un boton
    </button>
  );
  
}

export default function Home() {
  return (
    <> 
    <h1>Hello Asshole!</h1> 
    <Saludar name ="saul"></Saludar>
    <Saludar name ="juan"></Saludar>
    <Chat></Chat>
    <div>
      <MyButton />
    </div>
    </>
  )
}
