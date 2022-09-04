import React from "react";
import ReactDOM  from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"))

function Saludar(){
    const usuario={
        nombre:"Jona",
        apellido:"Quispe"
    }
    return(<div>
        <h1>{usuario.nombre}</h1>
        <h2>{usuario.apellido}</h2>
    </div>)

}

root.render(<div>
    <Saludar/>

</div>)