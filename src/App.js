//import logo from './logo.svg';
import './App.css';




function LeoHola(props){
  return (
    <div>
      <td>
       {props.propiedad}  
      </td>  
      </div>
  )

}

function App() {
  return (
    <div className="App">
     <div>
    Propiedades 
    <LeoHola propiedad="1" /> 
    <LeoHola propiedad="2" />
    <LeoHola propiedad="25" />
    <LeoHola propiedad="2" />
    <LeoHola />
     </div>
    </div>
  );
}



export default App;
