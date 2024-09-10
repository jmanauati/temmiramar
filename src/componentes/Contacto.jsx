import { useForm } from "react-hook-form";
function Contacto() {

  const {register, handleSubmit} = useForm();

  const enviar = (data)=>{
    console.log(data)
  }


  return (
    <div className='contacto'>
        <h1 className='title-formulario'>Contacto</h1>
        <p className="texto-contacto">Contactanos a través de Instagram! Con gusto resolveremos tus inquietudes. </p>
        <a href="https://www.instagram.com/todoentremanos/" target="_blank"><button className="btn-contacto" >Enviar mensaje a Todo Entre Manos</button></a>


      {/* 

          <form className='formulario' onSubmit={ handleSubmit(enviar) }>

            <input type="text" placeholder='Ingresa tu nombre' {...register("nombre")} />
            <input type="email" placeholder='Ingresa tu email' {...register("email")} />
            <input type="phone" placeholder='Ingresa tu telefono' {...register("telefono")} />
            <button type='submit'>Enviar</button>
            
        </form>
        
      */}
      
    </div>
  )
}

export default Contacto
