import Item from "./Item"
import { toCapital } from "../helpers/toCapital"

function ItemList({productos }) {
  return (
    <div className="contenedor-productos">
      <div className="productos">
        {productos.map((prod)=>{
          return  (<Item key={prod.id} producto={prod} />)
          
        })}
      </div>
    </div>
  )
}

export default ItemList
