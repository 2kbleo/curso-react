//import logo from './logo.svg';
import './App.css';




function LeoHola(props){
  return (
    <div>
      <td>
      <h2>{props.propiedad1}</h2>
       <h3>{props.propiedad}</h3>
       </td>
      </div>
      
  )

}

function App() {
  return (
    <div className="App">
     <div>
    <h1>Propiedades</h1> 
    <LeoHola propiedad="uno" propiedad1="pepito" /> 
    <LeoHola propiedad="dos" />
    <LeoHola propiedad="tres" />
    <LeoHola propiedad="cuatro" />
    <LeoHola />
     </div>
    </div>
  );
}



export default App;
