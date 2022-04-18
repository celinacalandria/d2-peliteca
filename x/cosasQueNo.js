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


