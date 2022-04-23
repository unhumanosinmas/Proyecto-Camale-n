import './app.css'
import React from 'react';
import { getColores } from './colors';


function App() {  

let [nombreColor, setNombreColor] = React.useState("white")
let allColors = getColores();

function GetColor(){
  var numero = Math.floor(Math.random()*allColors.length)
  var color = allColors[numero][0]
  setNombreColor (allColors[numero][1])

  document.body.style.backgroundColor = `#${color}`;


}
  return (
    <div className="App">
        <div class="card" >
          <div class="card__content">
            <h1 class="card__header">El color de fondo es: {nombreColor}</h1>
            <button type="button" class="btn btn-outline-primary" onClick={()=>{GetColor()}}>Cambiar Color</button>
          </div>
        </div>
      </div>
  );
}

export default App;
