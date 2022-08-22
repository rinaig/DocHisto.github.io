 
function loguinSistema(){ //SE CREA LA FUNCION GENERAL PARA EL LOGUIN DEL SISTEMA

    // NO PERMITE MOSTRAR ALGUNOS ELEMENTOS QUE SE ENCUENTRAN OCULTOS EN EL HTML
    document.getElementById("divSistema").style.display = "none";
    document.getElementById("alertaFailLoguin").style.display = "none";
    document.getElementById("formUsuNewUsuario").style.display = "none";
    document.getElementById("mostrarFormUsuExist").style.display = "none";
 

     //Se definen datos de usuarios existentes dentro del array.
    const usu1 = {nomUsuario: "licanaliaalarcon@gmail.com", passUsuGuardado: "Callejeros"}
    const usu2 = {nomUsuario: "Alberto5689@mail.com", passUsuGuardado: "PassUsu2"}
    const usu3 = {nomUsuario: "jorge2486@mail.com", passUsuGuardado: "PassUsu3"}
    
    const listaUsuarios = [usu1, usu2,usu3];  //la lista de usuarios existentes en el array. 
   
    ///////MOSTRAR FORMULARIO PARA CREAR NUEVO USUARIO Y ESCONDER EL DE FORMULARIO EXISTENTE
    let botonMostrarNewUsuario =document.getElementById("mostrarForm") 
    botonMostrarNewUsuario.addEventListener("click", eventoMostrarNuevoUsuario) 
    function eventoMostrarNuevoUsuario(){
        document.getElementById("formUsuNewUsuario").style.display = "block";
        document.getElementById("form").style.display = "none";
        document.getElementById("mostrarFormUsuExist").style.display = "Block";
        document.getElementById("mostrarForm").style.display = "none";

    }

    ///////MOSTRAR FORMULARIO PARA CREAR NUEVO USUARIO Y ESCONDER EL DE FORMULARIO EXISTENTE
        let botonMostrarUsuExistente =document.getElementById("mostrarFormUsuExist") 
        botonMostrarUsuExistente.addEventListener("click", eventoMostrarUsuarioExistente) 
    function eventoMostrarUsuarioExistente(){
        document.getElementById("form").style.display = "block";
        document.getElementById("formUsuNewUsuario").style.display = "none";
        document.getElementById("mostrarForm").style.display = "Block";
        document.getElementById("mostrarFormUsuExist").style.display = "none";
    }

//SE LLAMA AL FORMULARIO PARA CREAR A UN CLIENTE.
let formularioNuevoUsuario = document.getElementById("formUsuNewUsuario")
formularioNuevoUsuario.addEventListener('submit', datosNewUsuForm)
function datosNewUsuForm(e){
     //CANCELAMOS POR LAS DUDAS
    e.preventDefault();
    // CAPTURAR LOS DATOS DE LOS INPUT
    let datosNewUsuCargados = e.target
    //obtenemos los datos ingresados e enviados en el evento.
        for(const datosNewUsu of listaUsuarios){    //recorre el array buscando dentro de datos el nombre de usuario y contraseña     
       
         listaUsuarios.push({nomUsuario: datosNewUsuCargados.children[0].value, passUsuGuardado: datosNewUsuCargados.children[1].value}) 
         document.getElementById("divLoguin").style.display = "none";
         console.log(listaUsuarios) 
         logicaSistema()
         break;
               }      
}

//SE LLAMA AL FORMULARIO DE LOGUIN DE CLIENTE EXISTENTE
let formulario = document.getElementById("form")
formulario.addEventListener('submit', datosUsuForm)
function datosUsuForm(e){
    //CANCELAMOS POR LAS DUDAS
    e.preventDefault();
    // CAPTURAR LOS DATOS DE LOS INPUT
    let datosUsuExistente = e.target
    //obtenemos los datos ingresados e enviados en el evento.
        for(const datos of listaUsuarios){    //recorre el array buscando dentro de datos el nombre de usuario y contraseña
        if (datos.nomUsuario == datosUsuExistente.children[0].value && datos.passUsuGuardado == datosUsuExistente.children[1].value){// SI AMBAS COINCIDEN INGRESA AL SISTEMA
                  // LLAMA AL DIV DEL SISTEMA Y LO BORRA
                let divLoguin = document.getElementById("divLoguin")
                // REMUEVE EL LINK DONDE SE ENCONTRABA LA INTERFAZ DEL LOGUIN
                document.getElementById("divLoguin").style.display = "block";
                logicaSistema() // llama a la logica del sistema
                }
       
         else{ // SI EL NOMBRE DE USUARIO Y CONTRASEÑA NO COINCIDEN MUESTRA EL ALERT OCULTADO AL PRINCIPIO
            document.getElementById("alertaFailLoguin").style.display = "block";
            break;}
        }
}
}
        loguinSistema() //Se llama a la funcion loguin para comenzar el mismo. 

        ////////////////// Se crea el entorno del sistema
      
        
        
         
        function logicaSistema(){

            
            document.getElementById("divSistema").style.display = "block";
            document.getElementById("divLoguin").style.display = "none";



            
    // //Se crean los pacientes existentes con datos ya guardados
    // const paciente1 = {dni: 31288916, nombre: "Nahuel", apellido: "Iglesias", fechNac: ('21/10/1984'), comentariosSesion:"Comentario guardado paciente 2"}
    // const paciente2 = {dni: 32166940, nombre: "Analia", apellido: "Alarcon", fechNac: ('24/02/1986'), comentariosSesion: "Comentario guardado paciente 2"}
    // const paciente3 = {dni: 30555999, nombre: "Nicolas", apellido: "Moreno",fechNac: ('15/10/2009'), comentariosSesion: "Comentario guardado paciente 3"}

    // const listaDePacientes = [paciente1, paciente2,paciente3]; //Se crea el array llamado lista de pacientes  


    //    // Se crean las 3 funciones del sistema
    // function crearNuevoPaciente(){  //funcion para crear nuevos pacientes

    //    listaDePacientes.push({ // Se solicita el usuario todos los datos del paciente. 
    //    dni: Number(prompt("Ingrese DNI del Paciente")), 
    //    nombre: prompt("Ingrese nombre del Paciente"), 
    //    apellido: prompt("Ingrese Apellido del Paciente"),
    //    fechNac: prompt("Ingrese Fecha de Nacimiento"),
    //    comentariosSesion: prompt("Ingrese comentarios de Sesion"), 
    //    })
    //    alert('Usted ha dado de alta correctamente un Paciente')

    //         ///// SE TRAE DESDE EL HTML LOS LI DONDE SE MOSTRARAN LOS DATOS DEL NUEVO PACIENTE CREADO
    //         let datoNuevoDni = document.getElementById('nuevoDNI')
    //         let datoNuevoNombre = document.getElementById('nuevoNombre')
    //         let datoNuevoApellido = document.getElementById('nuevoApellido')
    //         let datoNuevoFechNac = document.getElementById('nuevoFechNac')
    //         let datoNuevoComentario = document.getElementById('nuevoComentario')


    //         //SE RECORRE LOS DATOS DEL NUEVO PACIENTE
    //         for (const datosNewPac of listaDePacientes) {
    //             datoNuevoDni.innerHTML = `DNI: ${datosNewPac.dni}` 
    //             datoNuevoNombre.innerHTML = `Nombre: ${datosNewPac.nombre}`
    //             datoNuevoApellido.innerHTML = `Apellido: ${datosNewPac.apellido}`
    //             datoNuevoFechNac.innerHTML = `Fecha de Nacimiento: ${datosNewPac.fechNac}`
    //             datoNuevoComentario.innerHTML = `Comentario Primera Sesion: ${datosNewPac.comentariosSesion}`
    //         }}

    //    function consultarPaciente(){
    //    const busquedaDNI = listaDePacientes.find(resultado => resultado.dni === Number(prompt("Ingrese el DNI a Consultar")))
    //    console.log(busquedaDNI) // SE MUESTRA EL RESULTADO DEL PACIENTE BUSCADO
    //    }

    //    function agrgarComentariosPaciente(){ 
    //        //SE CREO LA VARIABLE PARA MOSTRAR EL DNI DEL PACIENTE
    //        let dniPacienteBuscar = Number(prompt("Ingrese DNI de Paciente"))
    //        cargarComentaro = listaDePacientes.findIndex((dato => dato.dni === dniPacienteBuscar));
    //        listaDePacientes[cargarComentaro].comentariosSesion = prompt("Ingrese cometarios del Paciente");
           

    //        //SE CREA UN PARRAFO PARA MOSTRAR LOS COMENTARIOS DEL PACIENTE: 
    //        let nuevoComentarioPacienteDOM = document.getElementById('comentPass')
    //        nuevoComentarioPacienteDOM.innerHTML = `DNI: ${dniPacienteBuscar} Nuevo Comentario: ${listaDePacientes[cargarComentaro].comentariosSesion}`
    //     }
    

    //     let opcionesSistema = Number(prompt("DOCHISTO \n \nPor favor escoge la opcion: \n \n1. Crear Nuevo Paciente \n2. Consutar Paciente por DNI \n3. Actualizar Datos de Paciente \n4. Para salir del Sistema"))  //Se muestra el Usuario posibilidad de ingresar al sistema mediante un Login o crear un nuevo usuario
        

    //     if (opcionesSistema == 1){
    //          crearNuevoPaciente()}
    //     if(opcionesSistema == 2){
    //         consultarPaciente()}
    //     if (opcionesSistema == 3){
    //         agrgarComentariosPaciente()        }
    //     if (opcionesSistema == 4){
    //         alert("Gracias por Utilizar DOCHISTO \n \nLo esperamos nuevamente")      }
    }


    

    







    