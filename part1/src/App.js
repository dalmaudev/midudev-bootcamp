import './App.css';
import Mensaje from './Mensaje.js'



const Description = () => {
  return <h3>Otro componente más con su descripción</h3>
}

const App = () => {

  const mensaje = "Titulo de la APP"
  const a = 5
  const b = 3

  return (
    <div className="App">
      
      <h1>{mensaje}</h1>
      <Mensaje color="green" msg="Estamos trabajando"/>
      <Mensaje color="orange" msg="en un curso"/>
      <Mensaje color="red" msg="de React"/>
      <Description />
      <strong> Estamos trabajando en ello </strong>
      
      <p>El resultado de a + b = { a + b }</p>
 
    </div>
  );
}

export default App;
