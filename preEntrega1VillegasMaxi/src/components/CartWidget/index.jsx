import "./index.css"
function Cartwidget (props) {
    return(
<>
<div className="cart">
   <img className="iconCart" src="../../../public/cart-vector.png" alt="" />
   {props.valor}
</div>

</>
    )
}
export default Cartwidget