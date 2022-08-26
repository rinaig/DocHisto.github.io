 
function loguinSistema(){ //SE CREA LA FUNCION GENERAL PARA EL LOGUIN DEL SISTEMA

    // No permite mostrar algunos elementos que se encuentran en el HTML
    document.getElementById("divSistema").style.display = "none";
    document.getElementById("alertaFailLoguin").style.display = "none";
    document.getElementById("formUsuNewUsuario").style.display = "none";
    document.getElementById("mostrarFormUsuExist").style.display = "none";

 

     //SE DEFINEN LOS USUARIOS EXISTENTES
    const usu1 = {nomUsuario: "licanaliaalarcon@gmail.com", passUsuGuardado: "Callejeros"}
    const usu2 = {nomUsuario: "Alberto5689@mail.com", passUsuGuardado: "PassUsu2"}
    const usu3 = {nomUsuario: "jorge2486@mail.com", passUsuGuardado: "PassUsu3"}
    //SE  CONVIERTE EN STRING PARA ENVIAR EL USUARIO 1 AL LOCALSTORAGE
    const convertirEnString = JSON.stringify(usu1)
    const convertirEnString2 = JSON.stringify(usu2)
    const convertirEnString3 = JSON.stringify(usu3)
    //SE ENVIA MENDIANTE UN SET AL LOCAL STORAGE LA INFORMACION INGRESADA
    localStorage.setItem("usu1", convertirEnString)    
    localStorage.setItem("usu2", convertirEnString2)
    localStorage.setItem("usu3", convertirEnString3)

    
    const listaUsuarios = [usu1, usu2,usu3];  //la lista de usuarios existentes en el array. 
   
    ///////mostrar formulario para crear nuevo usuario y esconder el de formulario Existente
    let botonMostrarNewUsuario =document.getElementById("mostrarForm") 
    botonMostrarNewUsuario.addEventListener("click", eventoMostrarNuevoUsuario) 
    function eventoMostrarNuevoUsuario(){
        document.getElementById("formUsuNewUsuario").style.display = "block";
        document.getElementById("form").style.display = "none";
        document.getElementById("mostrarFormUsuExist").style.display = "Block";
        document.getElementById("mostrarForm").style.display = "none";
    }

    ///////mostrar formulario para crear nuevo usuario y esconder el de formulario nuevo
        let botonMostrarUsuExistente = document.getElementById("mostrarFormUsuExist") 
        botonMostrarUsuExistente.addEventListener("click", eventoMostrarUsuarioExistente) 
    function eventoMostrarUsuarioExistente(){
        document.getElementById("form").style.display = "block";
        document.getElementById("formUsuNewUsuario").style.display = "none";
        document.getElementById("mostrarForm").style.display = "Block";
        document.getElementById("mostrarFormUsuExist").style.display = "none";
    }

//se llama al formualario para crear nuevo usuario
let formularioNuevoUsuario = document.getElementById("formUsuNewUsuario")
formularioNuevoUsuario.addEventListener('submit', datosNewUsuForm)
function datosNewUsuForm(e){
     //cancelamos con preventDefault
    e.preventDefault();
    // capturamos los datos del input
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

//se llama al formulario del loguin del cliente existente
let formulario = document.getElementById("form")
formulario.addEventListener('submit', datosUsuForm)
function datosUsuForm(e){
    e.preventDefault();
    let datosUsuExistente = e.target
    //obtenemos los datos ingresados e enviados en el evento.
        for(const datos of listaUsuarios){    //recorre el array buscando dentro de datos el nombre de usuario y contraseña
        if (datos.nomUsuario == datosUsuExistente.children[0].value && datos.passUsuGuardado == datosUsuExistente.children[1].value){// SI AMBAS COINCIDEN INGRESA AL SISTEMA
                let divLoguin = document.getElementById("divLoguin")
                document.getElementById("divLoguin").style.display = "block";
                logicaSistema() // si se cumplen los parametros llama a la logica del sistema
                }
       
         else{ // si el nombre de usuario o contraseña no coincide muestra una alerta y corta
            document.getElementById("alertaFailLoguin").style.display = "block";
            break;}
        }
}
}
        loguinSistema() //Se llama a la funcion loguin para comenzar el mismo. 

        ////////////////// Se crea el entorno del sistema una vez ingresado
         
        function logicaSistema(){

               // SE OCULTAN FORMULARIOS Y DIV DE LOGUIN DEL SISTEMA
               document.getElementById("divSistema").style.display = "block";
               document.getElementById("divLoguin").style.display = "none";
               document.getElementById("formNuevoPaciente").style.display = "none";
               document.getElementById("formAgregarDatosSesion").style.display = "none";
               document.getElementById("formConsultarDatosPaciente").style.display = "none";
               document.getElementById("formModificarDatosPaciente").style.display = "none";
               document.getElementById("mostrarPrecio").style.display = "none";
               document.getElementById("trabajandoEnSeccion").style.display = "none";
               
   
   ///////////////////////////// COMIENZO MUESTRA DE FORMULARIOS CON BOTONERA DONDE DEPENDIENDO EL BOTON MUESTRA U OCULTA OTROS MENUES
               let botonFormNuevoPaciente =document.getElementById("btnNuevoPaciente") 
               botonFormNuevoPaciente.addEventListener("click", eventoMostrarFormNuevoPaciente) 
           function eventoMostrarFormNuevoPaciente(){
               document.getElementById("formNuevoPaciente").style.display = "Block";
               document.getElementById("trabajandoEnSeccion").style.display = "Block";
               document.getElementById("formAgregarDatosSesion").style.display = "none";
               document.getElementById("formConsultarDatosPaciente").style.display = "none";
               document.getElementById("formModificarDatosPaciente").style.display = "none";
               document.getElementById("mostrarPrecio").style.display = "none";               
           }
   
           let botonFormAgregarDatosSesion =document.getElementById("btnDatosSesion") 
           botonFormAgregarDatosSesion.addEventListener("click", eventoMostrarFormAgregarDatosSesion) 
       function eventoMostrarFormAgregarDatosSesion(){
           document.getElementById("formNuevoPaciente").style.display = "none";
           document.getElementById("trabajandoEnSeccion").style.display = "Block";
           document.getElementById("formAgregarDatosSesion").style.display = "block";
           document.getElementById("formConsultarDatosPaciente").style.display = "none";
           document.getElementById("formModificarDatosPaciente").style.display = "none";
           document.getElementById("mostrarPrecio").style.display = "none";
           
       }
   
       let botonFormConsultarDatosPaciente =document.getElementById("btnConsultaPaciente") 
       botonFormConsultarDatosPaciente.addEventListener("click", eventoMostrarFormConsultarDatosPaciente) 
       function eventoMostrarFormConsultarDatosPaciente(){
       document.getElementById("formNuevoPaciente").style.display = "none";
       document.getElementById("trabajandoEnSeccion").style.display = "Block";
       document.getElementById("formAgregarDatosSesion").style.display = "none";
       document.getElementById("formConsultarDatosPaciente").style.display = "block";
       document.getElementById("formModificarDatosPaciente").style.display = "none";
       document.getElementById("mostrarPrecio").style.display = "none";
       }
   
       let botonFormModificarDatosPaciente =document.getElementById("btnModificarPaciente") 
       botonFormModificarDatosPaciente.addEventListener("click", eventoMostrarFormModificarDatosPaciente) 
   function eventoMostrarFormModificarDatosPaciente(){
       document.getElementById("formNuevoPaciente").style.display = "none";
       document.getElementById("trabajandoEnSeccion").style.display = "Block";
       document.getElementById("formAgregarDatosSesion").style.display = "none";
       document.getElementById("formConsultarDatosPaciente").style.display = "none";
       document.getElementById("formModificarDatosPaciente").style.display = "block";
       document.getElementById("mostrarPrecio").style.display = "none";
       
       }

////////////    SE CREAN LOS VALORES POR SESION DENTRO DEL LOCAL STORAGE
       localStorage.setItem('valorOctubre', 1500)
       localStorage.setItem('valorNoviembre', 2000)
       localStorage.setItem('valorDiciembre', 2300)

       let botonFormValorDeSesion =document.getElementById("btnValorConsultas") 
       botonFormValorDeSesion.addEventListener("click", eventoMostrarFormValorDeSesion) 
   function eventoMostrarFormValorDeSesion(){
       document.getElementById("formNuevoPaciente").style.display = "none";
       document.getElementById("trabajandoEnSeccion").style.display = "none";
       document.getElementById("formAgregarDatosSesion").style.display = "none";
       document.getElementById("formConsultarDatosPaciente").style.display = "none";
       document.getElementById("formModificarDatosPaciente").style.display = "none";
       document.getElementById("mostrarPrecio").style.display = "block";

       let mostrarPrecioDOM = document.getElementById('mostrarPrecio')
       //SE CREA LA FUNCION DONDE MOSTRARA LOS VALORES POR SESION CUANDO SE SELECCIONE DICHO BOTON. 
       const mostrarPrecio = () =>{
        mostrarPrecioDOM.innerHTML = `
            <h3></h3>
            <p><strong>Octubre: </strong>$ ${ localStorage.getItem('valorOctubre')}</p>
            <p><strong>Noviembre: </strong>$ ${ localStorage.getItem('valorNoviembre')}</p>
            <p><strong>Diciembre: </strong>$ ${ localStorage.getItem('valorDiciembre')}</p>`
    }
    mostrarPrecio()
     }

    
//////////////////////////////////CODIGO ANTERIOR CON PROMT Y ALERTS DONDE SE PUEDEN CREAR O BUSCAR PACIENTES DENTRO DE UN ARRAY EL MISMO NO SE IMPLEMENTA AUN YA QUE LA IDEA ES DEJAR EL PROYECTO EN PRODCCION PERO VINCULARLO CON BASES DE DATOS: SI SE DESCOMENTA CORRE CORRECTAMENTE. 
            
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
    //     else if(opcionesSistema == 4){
    //         alert("Gracias por Utilizar DOCHISTO \n \nLo esperamos nuevamente")  
    //     }
    }


    

    







    