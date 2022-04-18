const listaPerteneciente = document.getElementById("listaPerteneciente");

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
    // NO FUNCIONA
    /* enQueListaEsta()
    { 
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
            pLista.innerText = "no tienen ninguna linea asociada";
            listaPerteneciente.appendChild(pLista);
        }
    } */
}




//INIT
function init()
{
    /* escribirBienvenida() */;
    mostrarMenu();
}

function escribirBienvenida(){
    const saludo = document.querySelector("#saludo");
    const bienvenida =document.createElement("h2");
    bienvenida.setAttribute("class", "bienvenida");
    let nombre = prompt("and you are...?")
    bienvenida.innerText= `¡Bienvenidx ${nombre}!`;
    saludo.appendChild(bienvenida);
}

function mostrarMenu()
{
    agregarPeliculas();
    listarPeliculas();
    verListaWatchlist();
    verListaFavoritas();
    verListaVistas();
}

function agregarPeliculas()
{
    const boton1 = document.querySelector("#cargarPeliculas");
    boton1.setAttribute("class", "styledBtn");
    boton1.addEventListener("click", ()=>functionIngresarPelicula());
}

function functionIngresarPelicula()
{
    ingresarPelicula();
    
  /*   let choice = prompt(`¿A qué lista deseas agregarla?
                        A. Películas VISTAS
                        B. Películas en WATCHLIST
                         C. Películas FAVORITAS`)
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
    alert("Película cargada");
    console.log(pelicula);  */
}


function ingresarPelicula()
{
    const nodoForm = document.querySelector("#form");
    nodoForm.setAttribute("class", "nodoForm");
    nodoForm.addEventListener("submit", (event)=>{

        event.preventDefault();

        let titulo = document.querySelector("#titulo");
        let director = document.querySelector("#director");
        let año = document.querySelector("#año");
        let genero = document.querySelector("#genero");
        let duracion = document.querySelector("#duracion");
        document.querySelector("#cargar").value= "agregando...";

        let newPelicula = new Pelicula(titulo, director, año, genero, duracion);
        peliteca.push(newPelicula);

        localStorage.setItem("miPeliteca", JSON.stringify(peliteca));

        //funciono
        //localStorage.setItem("titulo", titulo.value);

        //estaba antes cuando la const pelicula existia
        //return new Pelicula(titulo, director, año, genero, duracion);

        //no se
        //localStorage.setItem("key", JSON.stringify(Pelicula.value));
    })    
}

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

