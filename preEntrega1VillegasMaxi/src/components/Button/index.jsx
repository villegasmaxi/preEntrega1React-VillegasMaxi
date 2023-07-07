import "./index.css"
function Button (props) {
    return(
        <div 
        className="button" 
        style={{fontFamily:props.font}}
        onClick={props.handleClick}  
        >
   {props.valor}
        </div>
       
    )
}
export default Button;