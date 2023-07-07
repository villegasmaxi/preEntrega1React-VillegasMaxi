import ListContainer from "../ItemListContainer"; 
import Button from "../Button";
import Cartwidget from "../CartWidget";
import Brand from "../Brand";
import "./index.css";

function Navbar() {
  return (
    <>
      <div className="container">
        <div className="brand">
           <Brand/>
        </div>

        <div className="buttons">
          <Button
            valor="Cálculo a la romana"
            font="sans serif"
            handleClick={() => alert("Proximamente estará en servicio")}
          />

          <Button 
           valor="Calculo equitativo"
           handleClick={() => alert("proximamente calculadora de gastos")}
          />

          <Button 
          valor="Algo..." 
          />
        </div>

        <Cartwidget valor="0" />
      </div>

      <div className="listItem">
      <ListContainer
     title="bienvenido a calculo a la romana"
     subTitle="Donde los amigos comparten los gastos de su cena "
     />
      </div>
    </>
  );
}
export default Navbar;
