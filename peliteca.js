
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
    enQueListaEsta()
    {
        let queListaEs = "";
        if (queListaEs==this.vista)
        {
            queListaEs = "VISTA";
        }
        else if(queListaEs=this.watchlist)
        {
            queListaEs = "WATCHLIST";
        }
        else if (queListaEs=this.favoritas)
        {
            queListaEs= "FAVORITAS";
        }
        else
        {
            queListaEs = "no tiene lista asociada";
        }
    }
}




//INIT
function init()
{
    escribirBienvenida();
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
    const pelicula = ingresarPelicula();
    peliteca.push(pelicula);
    let choice = prompt(`¿A qué lista deseas agregarla?
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
    console.log(pelicula); 
}

function ingresarPelicula()
{
    let id = parseInt(prompt("ID:"));
    let titulo = prompt("Título:");
    let director = prompt("Director/a:");
    let año = prompt("Año:");
    let genero = prompt("Género:");
    let duracion = parseInt(prompt("Duración (mins.):"));
    return new Pelicula(titulo, director, año, genero, duracion);
}

function listarPeliculas()
{
    const boton2= document.querySelector("#listarPeliculas");
    boton2.setAttribute("class", "styledBtn");
    boton2.addEventListener("click", ()=>functionListarPeliculas());

    /* const ordenar = document.querySelector("#ordenar");
    const botonOrdenar = document.createElement("button");
    botonOrdenar.setAttribute("class", "styledBtn");
    ordenar.appendChild(botonOrdenar);
    botonOrdenar.addEventListener("click", ()=>ordenarPeliculas()); */
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

/* function ordenarPeliculas()
{
    peliteca.sort((a,b)=>{
        if(a.año > b.año)
            return -1;
        else 
            return 1;
    });
} */

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

//MENU VIEJO
/* function mostrarMenu()
{
    let op="";
    while(op!=="F")
    {
        op = prompt(`Ingrese una opción:
                            A. Agregar película a miPeliteca
                            B. Listar películas
                            C. Ver películas en WATCHLIST
                            D. Ver películas FAVORITAS
                            E. Ver películas VISTAS
                            F. Salir`);
        if(op==="A")
        {
            const pelicula = ingresarPelicula();
            peliteca.push(pelicula);
            let choice = prompt(`¿A qué lista deseas agregarla?
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
            console.log(pelicula); 
        }
        else if(op==="B")
        {
            console.log(peliteca);
        }
        else if(op==="C"){
            const paraVer = peliteca.filter( pelicula => pelicula.watchlist );
            console.log(paraVer);
        }
        else if(op==="D"){
            const misFavoritas = peliteca.filter (pelicula => pelicula.favoritas);
            console.log(misFavoritas);
        }
        else if(op==="E"){
            const misVitas = peliteca.filter (peliteca => peliteca.vista);
            console.log(misVitas);
        }
        else if(op==="F")
        {
            alert("miPeliteca está actualizada");
        }
        else
        {
            alert("Opción inválida");
        }
    }
}
 */

