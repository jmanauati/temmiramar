import Item from "./Item"
import { toCapital } from "../helpers/toCapital"

function ItemList({productos, titulo}) {
  return (
    <div className="contenedor-productos">
      <h2>{toCapital(titulo)}</h2>
      <div className="productos">
        {productos.map((prod)=>{
          return  (<Item key={prod.id} producto={prod} />)
          
        })}
      </div>
    </div>
  )
}

export default ItemList
