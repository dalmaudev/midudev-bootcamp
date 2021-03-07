
//en lugar de parametros a los componentes se les pasan props
const Mensaje = (props) => {
    return <h1 style={{color: props.color}}>{props.msg}</h1>
}
  
export default Mensaje
