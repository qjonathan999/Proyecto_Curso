export function Saludar({lenguaje,año=1995}){
    console.log(lenguaje,año)
    
    return(
        <>
            <h2>{lenguaje}</h2>
            <h3>{año}</h3>
        </>
    )

}

export function UserCard(props){
    console.log(props)
    const {nombre,monto,stock,sucursales,mensaje}=props
    return(
        <>
            <div>
                <h1>{nombre}</h1>
                <h2>{monto}</h2>
                <h3>{stock?"Hay Stock":"No hay Stock"}</h3>
                <h4>{sucursales[0]}</h4>
            </div>
        </>
    )
}
