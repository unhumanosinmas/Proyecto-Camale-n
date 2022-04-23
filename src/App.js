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
  document.class.card.style.backgroundColor = `#${color}`;

}
  return (
    <div className="App">
      <div class="grid__item">
        <div class="card" >
          <div class="card" align="center">
          </div>
          <div class="card__content">
            <h1 class="card__header">El color de fondo es: {nombreColor}</h1>
            <button class="card__btn" onClick={()=>{GetColor()}}>Cambiar Color</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
