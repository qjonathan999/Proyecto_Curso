import React from "react";
import ReactDOM from "react-dom/client";
import { Saludar, UserCard } from "./Saludar"
import Product, { NavBar } from "./Product";

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<div>
    <UserCard nombre="Monitor Led Curve" monto={30500} stock={true} sucursales={["Avellaneda", "Caballito"]} mensaje={function(){alert("Nuevo Producto")}} />

    <UserCard nombre="Teclado gamer" monto={4500} stock={false} sucursales={["San Cristobal", "Caballito"]} mensaje={function(){alert("Nuevo Producto")}} />

</div>)