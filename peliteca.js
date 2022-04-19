//PELICULAS
class Pelicula{
    constructor(id, titulo, director, año, genero, duracion){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.año = año;
        this.genero = genero;
        this.duracion = duracion;
        this.vista = false;
        this.watchlist = false;
        this.favoritas = false;
        this.registro = this.enQueListaEsta();
    }
    agregarPeliVistas()
    {
        this.vista = true;
    }
    agregarPeliWatchlist()
    {   
        this.watchlist = true;    
    }
    agregarPeliFavoritas()
    {
        this.favoritas = true;
    }
    
    // NO FUNCIONA BIEN
    //esta mal definido queListaEs pero no se como agregarle un valor para compararlo despues.
    enQueListaEsta()
    { 
        const listaPerteneciente = document.getElementById("listaPerteneciente"); 
        let queListaEs = true;
        if (queListaEs=this.vista)
        {
            const pLista = document.createElement("p");
            pLista.setAttribute("class", "pLista");
            pLista.innerText = "VISTA";
            listaPerteneciente.appendChild(pLista);
        }
        else if(queListaEs=this.watchlist)
        {
            const pLista = document.createElement("p");
            pLista.setAttribute("class", "pLista");
            pLista.innerText = "WATCHLIST";
            listaPerteneciente.appendChild(pLista);
        }
        else if (queListaEs=this.favoritas)
        {
            const pLista = document.createElement("p");
            pLista.setAttribute("class", "pLista");
            pLista.innerText = "FAVORITA";
            listaPerteneciente.appendChild(pLista);
        }
        else
        {
            const pLista = document.createElement("p");
            pLista.setAttribute("class", "pLista");
            pLista.innerText = "no tiene ninguna lista asociada";
            listaPerteneciente.appendChild(pLista);
        }
    }
}

//INIT
function init()
{
    mostrarMenu();
}

//MOSTRAR MENU
function mostrarMenu()
{
    agregarPeliculas();
    listarPeliculas();
    verListaWatchlist();
    verListaFavoritas();
    verListaVistas();
}

//AGREGAR PELICULAS
function agregarPeliculas()
{
    const boton1 = document.querySelector("#cargarPeliculas");
    boton1.setAttribute("class", "styledBtn");
    boton1.addEventListener("click", ()=>functionIngresarPelicula());
}

function functionIngresarPelicula()
{
    ingresarPelicula();
    
  /* ESTA FUNCION ME QUEDO ASI PORQUE FUI MODIFICANDO EL CODIGO DESPUES. 
  POSTERIORMENTE LA BORRO Y DEJO TODO MAS PROLIJO EN MENOS LINEAS. 
  NO LA CAMBIO AHORA PARA PREVENIR ERRORES */

}

function ingresarPelicula(event)
{
    event.preventDefault();

    let titulo = event.target[0].value;
    let director = event.target[1].value;
    let año = event.target[2].value;
    let genero = event.target[3].value;
    let duracion = event.target[4].value;

    let pelicula = new Pelicula(titulo, director, año, genero, duracion);

    let choice = document.getElementById("listaAgregada").value;
    if(choice==="A")
    {
        pelicula.agregarPeliVistas();
    }
    else if(choice==="B")
    {
        pelicula.agregarPeliWatchlist();
    }
    else if(choice==="C")
    {
        pelicula.agregarPeliFavoritas();
    }

    peliteca.push(pelicula);

    localStorage.setItem("miPeliteca", JSON.stringify(peliteca));
    console.log(event);
}

//LISTAR PELICULAS
function listarPeliculas()
{
    const boton2= document.querySelector("#listarPeliculas");
    boton2.setAttribute("class", "styledBtn");
    boton2.addEventListener("click", ()=>functionListarPeliculas());
}

function functionListarPeliculas(){
    const listaCargadas = document.querySelector("#peliculasCargadas");
    peliteca.forEach(element => {
        const nodoLi = document.createElement("li");
        nodoLi.setAttribute("class", "nodoLi");
        nodoLi.innerHTML = `${element.titulo} - ${element.director} - ${element.registro}`;
        listaCargadas.appendChild(nodoLi);
    })
}

//LISTA WATCHLIST
function verListaWatchlist()
{
    const boton3= document.querySelector("#listaWatchlist");
    boton3.setAttribute("class", "styledBtn");
    boton3.addEventListener("click", ()=>mostrarListaWatchlist());
}

function mostrarListaWatchlist()
{
    const listaWatchlist = document.querySelector("#peliculasWatchlist");
    const paraVer = peliteca.filter(pelicula => pelicula.watchlist);
    paraVer.forEach(element => {
        const nodoLi = document.createElement("li");
        nodoLi.setAttribute("class", "nodoLi");
        nodoLi.innerHTML = `${element.titulo} - ${element.director} - ${element.año}`
        listaWatchlist.appendChild(nodoLi);
    })
}

//LISTA FAVORITAS
function verListaFavoritas()
{
    const boton4= document.querySelector("#listaFavoritas");
    boton4.setAttribute("class", "styledBtn");
    boton4.addEventListener("click", ()=>mostrarListaFavoritas());
}

function mostrarListaFavoritas()
{
    const listaFavoritas = document.querySelector("#peliculasFavoritas");
    const misFavoritas = peliteca.filter (pelicula => pelicula.favoritas);
    misFavoritas.forEach(element => {
        const nodoLi = document.createElement("li");
        nodoLi.setAttribute("class", "nodoLi");
        nodoLi.innerHTML = `${element.titulo} - ${element.director} - ${element.año}`;
        listaFavoritas.appendChild(nodoLi);
    })
}

//LISTA VISTAS
function verListaVistas()
{
    const boton5= document.querySelector("#listaVistas");
    boton5.setAttribute("class", "styledBtn");
    boton5.addEventListener("click", ()=>mostrarListaVistas());
}

function mostrarListaVistas()
{   
    const listaVistas = document.querySelector("#peliculasVistas");
    const misVitas = peliteca.filter (peliteca => peliteca.vista);
    misVitas.forEach(element => {
        const nodoLi = document.createElement("li");
        nodoLi.setAttribute("class", "nodoLi");
        nodoLi.innerHTML = `${element.titulo} - ${element.director} - ${element.año}`;
        listaVistas.appendChild(nodoLi);
    })
}

