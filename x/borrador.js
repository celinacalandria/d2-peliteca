
function init(){
  escribirBienvenida();
  mostrarMenu();
  escribirMensaje();
}

function escribirBienvenida()
{
const myH1 = document.createElement("h1");
myH1.innerHTML="Bienvenido";
document.body.appendChild(myH1);

}

function mostrarMenu()
{
 categorias.forEach((categoria)=>{
   const myBtn = document.createElement("button");
   myBtn.setAttribute("class", "styledBtn");
   myBtn.innerHTML=categoria.nombre;
   myBtn.addEventListener("click", ()=>mostrarProductos(categoria.id));
   document.body.appendChild(myBtn);
 })
}

function escribirMensaje()
{
const nodoMensaje = document.createElement("p");
nodoMensaje.innerHTML= "Por favor, selecciona una categoría para continuar:";
document.body.appendChild(nodoMensaje);
}


function mostrarProductos(idCategoria)
{

// Filtrar los productos de la categoria
// Mostrar los productos

const productosFiltrados = filtrarProductos(idCategoria);
let cadena ='';
productosFiltrados.forEach((element)=>{
  cadena+=`<div>
  Nombre Producto: ${element.nombre}<br>
  Precio Producto: ${element.precio}<br>
  
  </div>`

  document.querySelector("#productos").innerHTML=cadena;
});



}

function filtrarProductos(idCategoria)
{

  return productos.filter(producto=>producto.categoria===idCategoria);

}



function ordenarASC()
{

    usuarios.sort((a,b)=>
    {
        
        if(a.first_name > b.first_name)
            return -1;
        else
            return 1;
    });
    mostrarUsuarios();
   
}
