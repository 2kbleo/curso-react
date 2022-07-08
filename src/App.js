import './App.css';
import React, {useState} from 'react';

function LeoHola(props){
  return (
    <div>
      <td>
        Numero 
      <h2>{props.propiedad1}</h2>
       <h3>{props.propiedad}</h3>
       </td>
      </div>
        )
}
function  Numero(){
  const [cuenta, setDolar] = useState(10);
  return (
    <div>
      <td>
      <button onClick={() => setDolar(cuenta + 10)}>aumenta el dolar</button>
      <h1>{cuenta}</h1>
      </td>
    </div>
  );
}

function App() {
  return (
    <div className="App">
    <div>
    <h1>Propiedades</h1> 

    <LeoHola propiedad="uno" propiedad1="pepito" /> 
    <LeoHola propiedad="dos" propiedad1="tiyulo3" />
    <LeoHola propiedad="tres" propiedad1="pe312pito"/>
    <LeoHola propiedad="cuatro" propiedad1="pepi321312to" />
    <Numero />
     </div>
    </div>
  );
}



export default App;
