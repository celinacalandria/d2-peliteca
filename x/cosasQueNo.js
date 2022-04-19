//LIBRERIAS
/* <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
 */

//TOASTIFY
/* <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css">
 */


//ESCRIBIR BIENVENIDA
/* function escribirBienvenida(){
    const saludo = document.querySelector("#saludo");
    const bienvenida =document.createElement("h2");
    bienvenida.setAttribute("class", "bienvenida");
    let nombre = prompt("and you are...?")
    bienvenida.innerText= `¡Bienvenidx ${nombre}!`;
    saludo.appendChild(bienvenida);
} */

//EN QUE LISTA ESTA 

    //this.registro = this.enQueListaEsta();
    
   /*  enQueListaEsta()
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
        return this.registro = queListaEs;
    } */

//INGRESAR PELICULAS LOCAL STORAGE
/* function ingresarPelicula(){
    const nodoForm = document.querySelector("#form");
    nodoForm.setAttribute("class", "nodoForm");
    nodoForm.addEventListener("submit", (evento)=>{ 
    
          
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
} 
     */


 //CARGAR PELIS CON PROMPT
   /*  let id = parseInt(prompt("ID:"));
    let titulo = prompt("Título:");
    let director = prompt("Director/a:");
    let año = prompt("Año:");
    let genero = prompt("Género:");
    let duracion = parseInt(prompt("Duración (mins.):"));
    return new Pelicula(titulo, director, año, genero, duracion); */

 //ORDENAR PELICULAS
    /* const ordenar = document.querySelector("#ordenar");
    const botonOrdenar = document.createElement("button");
    botonOrdenar.setAttribute("class", "styledBtn");
    ordenar.appendChild(botonOrdenar);
    botonOrdenar.addEventListener("click", ()=>ordenarPeliculas()); */

//FUNCION ORDENAR PELICULAS
/* function ordenarPeliculas()
{
    peliteca.sort((a,b)=>{
        if(a.año > b.año)
            return -1;
        else 
            return 1;
    });
} */

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


