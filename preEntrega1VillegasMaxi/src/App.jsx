import ListContainer from "./components/ItemListContainer";
import Navbar from './components/NavBar'
function App() {
  return (
    <>
     <Navbar/>
    
      <ListContainer
     title="bienvenido a calculo a la romana"
     subTitle="Donde los amigos comparten los gastos de su cena "
     />
      
    </>
  )
}

export default App
