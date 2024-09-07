import data from '../data/productos.json'

export const pedirDatos = ()=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve(data);
        },500)
    })
}

export const pedirItemPorId = (id)=>{
    return new Promise((resolve,reject)=>{

        console.log("ID recibido:", id); // Para verificar el id recibido
        console.log("Data:", data);


        const item = data.find((el)=> el.id === Number(id))
        if(item){
            resolve(item)
        }else{
            reject({
                error: "No se encontro el producto"
            })
        }
    })
};