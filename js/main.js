/**
 * Array con los nombres de los días de la semana
 */
var diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
/**
 * Array con los nombres de los meses del año
 */
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

/**
 * Método para que cada segundo se actualice e imprima la fecha y hora
 */
setInterval(()=>{imprimirFecha()}, 1000);

/**
 * Método que escribe la hora y la fecha en la cabecera
 */
function imprimirFecha(){
    let fechaHoy = new Date();
    let fecha = document.getElementById("fecha");
    let hora = document.getElementById("hora");
    fecha.innerHTML = diasSemana[fechaHoy.getDay()] + ", " + fechaHoy.getDate() + " de " + meses[fechaHoy.getMonth()] + " de " + fechaHoy.getFullYear();
    hora.innerHTML = fechaHoy.getHours() + ":" + fechaHoy.getMinutes() + ":" + fechaHoy.getSeconds();
}

/**
 * Array con las actividades disponibles
 */
var arrayClub = ["natación", "yoga", "pádel", "musculación", "spinning", "pilates"];
imprimirFecha();

/**
 * Datos con los socios 
 */
const socios = [
  {
    id: "SOC-0001",
    nombre: "Lucía",
    apellidos: "Martín Ruiz",
    dni: "12345678Z",
    email: "lucia.martin@correo.es",
    telefono: "612345678",
    fechaNacimiento: "1995-03-14",
    fechaAlta: "2019-09-02",
    actividades: ["natación", "yoga"],
    cuota: 35
  },
  {
    id: "SOC-0002",
    nombre: "Álvaro",
    apellidos: "Gómez Peña",
    dni: "23456789D",
    email: "alvaro.gomez@correo.es",
    telefono: "623456789",
    fechaNacimiento: "1988-11-23",
    fechaAlta: "2017-01-15",
    actividades: ["musculación", "spinning"],
    cuota: 42
  },
  {
    id: "SOC-0003",
    nombre: "María José",
    apellidos: "Núñez Castro",
    dni: "34567890V",
    email: "mj.nunez@gmail.com",
    telefono: "634567890",
    fechaNacimiento: "2001-06-05",
    fechaAlta: "2022-03-20",
    actividades: ["pilates"],
    cuota: 25
  },
  {
    id: "SOC-0004",
    nombre: "Pablo",
    apellidos: "Ortega Díaz",
    dni: "45678901G",
    email: "pablo.ortega@outlook.com",
    telefono: "645678901",
    fechaNacimiento: "1979-02-28",
    fechaAlta: "2015-10-01",
    actividades: ["pádel", "natación", "musculación"],
    cuota: 55
  },
  {
    id: "SOC-0005",
    nombre: "Carmen",
    apellidos: "Iglesias Moreno",
    dni: "56789012B",
    email: "carmen.iglesias@gmail.com",
    telefono: "656789012",
    fechaNacimiento: "1992-09-17",
    fechaAlta: "2020-01-13",
    actividades: ["yoga", "pilates"],
    cuota: 30
  },
  {
    id: "SOC-0006",
    nombre: "Íñigo",
    apellidos: "Santos Vega",
    dni: "67890123B",
    email: "inigo.santos@correo.es",
    telefono: "667890123",
    fechaNacimiento: "2010-12-08",
    fechaAlta: "2024-09-09",
    actividades: ["pádel"],
    cuota: 20
  },
  {
    id: "SOC-0007",
    nombre: "Laura",
    apellidos: "Romero Blanco",
    dni: "78901234X",
    email: "laura.romero@outlook.com",
    telefono: "678901234",
    fechaNacimiento: "1985-04-30",
    fechaAlta: "2018-05-07",
    actividades: ["spinning", "yoga", "natación"],
    cuota: 48
  },
  {
    id: "SOC-0008",
    nombre: "Javier",
    apellidos: "Molina Cano",
    dni: "89012345E",
    email: "javier.molina@correo.es",
    telefono: "689012345",
    fechaNacimiento: "1998-07-21",
    fechaAlta: "2021-11-22",
    actividades: ["musculación"],
    cuota: 28
  },
  {
    id: "SOC-0009",
    nombre: "Marta",
    apellidos: "Ferrer Ibáñez",
    dni: "90123456A",
    email: "marta.ferrer@gmail.com",
    telefono: "690123456",
    fechaNacimiento: "1971-01-10",
    fechaAlta: "2014-02-03",
    actividades: ["natación", "pilates"],
    cuota: 38
  },
  {
    id: "SOC-0010",
    nombre: "Daniel",
    apellidos: "Reyes Ñáñez",
    dni: "11223344B",
    email: "daniel.reyes@correo.es",
    telefono: "711223344",
    fechaNacimiento: "2003-08-19",
    fechaAlta: "2023-06-12",
    actividades: ["pádel", "spinning"],
    cuota: 33
  }
];

/**
 * Método que pinta la tabla con los socios registrados
 * @param socios 
 */
function imprimirSocios(socios){
    var idSocio = document.getElementById("tabla-socios");
    idSocio.innerHTML = "";
    for(var socio of socios){
      var iniciales = socio.nombre.substring(0, 1) + "" + socio.apellidos.substring(0, 1);
      var tr = document.createElement("tr");
      var tdId = document.createElement("td");
      var spanIniciales = document.createElement("span");
      spanIniciales.classList.add("iniciales");
      spanIniciales.textContent = iniciales;
      var spanId = document.createElement("span");
      spanId.classList.add("id-socio");
      spanId.textContent = socio.id; 
      tdId.appendChild(spanIniciales);
      tdId.appendChild(spanId);
      
      var tdNombre = document.createElement("td");
      var apellidos = socio.apellidos.split(" ")
      tdNombre.textContent = socio.nombre + " " + apellidos[0];
      if(apellidos.length > 1){
        tdNombre.textContent += " " + apellidos[1].substring(0, 1) + ".";
      }
      tr.appendChild(tdId);
      tr.appendChild(tdNombre);


      var tdEmail = document.createElement("td");
      var asteriscosCorreo = socio.email.split("@");
      tdEmail.textContent = socio.email.substring(0, 2) + asteriscosCorreo[0].substring(2).replace(/./g, "*") + "@" + asteriscosCorreo[1];
      tr.appendChild(tdEmail);

      var tdEdad = document.createElement("td");
      tdEdad.textContent = calcularEdad(socio.fechaNacimiento);
      tr.appendChild(tdEdad);

      var tdActividades = document.createElement("td");
      for(var actividad of socio.actividades){
          tdActividades.textContent += (actividad != ""?actividad:"No hay actividades") + " ";
      }
      tr.appendChild(tdActividades);

      var tdCuota = document.createElement("td");
      tdCuota.textContent = socio.cuota.toFixed(2) + "€";
      tr.appendChild(tdCuota);

      idSocio.appendChild(tr);
    }
    
}

/**
 * Método que calcula los años cumplidos de una persona
 * @param fechaNacimiento 
 * @returns 
 */

function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const nac = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nac.getFullYear();
    const aunNoCumple = hoy.getMonth() < nac.getMonth() ||
    (hoy.getMonth() === nac.getMonth() && hoy.getDate() < nac.getDate());
    if (aunNoCumple){
      edad--;
    }
    return edad;
}

/**
 * Método que vuelve a pintar en pantalla la tabla pero con los filtros de búsqueda, actividades y orden
 */
function actualizarSocios(){
  var resultado = buscador(socios);
  resultado = filtroActividad(resultado);
  resultado = filtradoOrden(resultado);
  imprimirSocios(resultado);
}

/**
 * Método que devuelve los socios cuyo nombre, apellidos o emaul contienen el texto buscado
 * @param lista 
 * @returns 
 */
function buscador(lista){ 
  var texto = cambiarTildes(document.getElementById("buscador").value.trim());
  if(texto.length < 2){
    return lista;
  }
  return lista.filter(function(socio){
    var nombreCompleto = cambiarTildes(socio.nombre + " " + socio.apellidos + " " + socio.email);
    return nombreCompleto.includes(texto);
  });
}

/**
 * Método para rellenar la lista desplegable de actividades
 */
function rellenarFiltroActividad(){
    var lista = document.getElementById("filtro-actividad");
    lista.length = 1;
    for(var actividad of arrayClub){
      var optionActividad = document.createElement("option");
      optionActividad.value = actividad;
      optionActividad.textContent = actividad;
      lista.appendChild(optionActividad);
    }
}

/**
 * Método que devuelve los socios matriculados en una actividad concreta
 * @param {*} lista 
 */
function filtroActividad(lista){
    var actividadSeleccionada = document.getElementById("filtro-actividad").value;
    return lista.filter(function(socio){
      return actividadSeleccionada == ""?true:socio.actividades.includes(actividadSeleccionada);
    });
}

/**
 * Método que devuelve una copia de la lista ordenada según la opción seleccionada
 * @param {*} e 
 * @returns 
 */
function filtradoOrden(lista){
    var sociosFiltrados = lista.slice();
    switch(document.getElementById("orden").value){
      case "nombre": {
        sociosFiltrados.sort(function(a, b){
          return a.nombre.localeCompare(b.nombre);
        }); 
      }; break;
      case "apellidos": {
        sociosFiltrados.sort(function(a, b){
          return a.apellidos.localeCompare(b.apellidos);
        })
      }; break;
      case "jovenes": {
        sociosFiltrados.sort(function(a, b){
          return calcularEdad(a.fechaNacimiento) - calcularEdad(b.fechaNacimiento);
        })
      }; break;
      case "antiguos": {
        sociosFiltrados.sort(function(a, b){
          return calcularEdad(b.fechaNacimiento) - calcularEdad(a.fechaNacimiento);
        })
      }; break;
    }
    return sociosFiltrados;
}

document.getElementById("btn-pantalla-completa").addEventListener("click", function(){
    let tablaSocio = document.getElementById("contenedor-tabla");
    if(document.fullscreenElement === null){
        tablaSocio.requestFullscreen();
    }
    else{
        document.exitFullscreen();
    }
})

/**
 * Método para cambiar las tildes de un texto por unas sin tilde
 * @param texto 
 * @returns 
 */
function cambiarTildes(texto){
    return texto.toLowerCase().replace(/á/g, "a").replace(/é/g, "e").replace(/í/g, "i").replace(/ó/g, "o").replace(/ú/g, "u").replace(/ü/g, "u");
}

document.getElementById("buscador").addEventListener("input", actualizarSocios);
document.getElementById("filtro-actividad").addEventListener("change", actualizarSocios);
document.getElementById("orden").addEventListener("change", actualizarSocios);

document.getElementById("btn-Ficha").addEventListener("click", buscarDNI);

/**
 * Método que busca un socio por dni y muestra su ficha si existe
 */
function buscarDNI(){
  let dniSocio = document.getElementById("dni-ficha").value.trim().toUpperCase();
  var resultadoFicha = document.getElementById("resultado-ficha");
  resultadoFicha.textContent = "";
  var socioBuscado = socios.find(function(socio){
    return socio.dni === dniSocio;
  })

  if(socioBuscado === undefined){
    var error = document.createElement("p");
    error.classList.add("ficha-error");
    error.textContent = "No hay ningún socio con ese DNI.";
    resultadoFicha.appendChild(error);
  }
  else{
    var fichaNombre = document.createElement("h3");
    fichaNombre.classList.add("ficha-nombre");
    fichaNombre.textContent = socioBuscado.nombre + " " + socioBuscado.apellidos + " ";
    var spanId = document.createElement("span");
    spanId.classList.add("id-socio");
    spanId.textContent = socioBuscado.id;
    fichaNombre.appendChild(spanId);
    resultadoFicha.appendChild(fichaNombre);

    var datos = document.createElement("dl");
    datos.classList.add("ficha-datos");
    agregarDatos(datos, "DNI", socioBuscado.dni);
    agregarDatos(datos, "Email", socioBuscado.email + " (dominio: " + socioBuscado.email.split("@")[1] + ")");
    agregarDatos(datos, "Teléfono", (socioBuscado.telefono.substring(0,3) + " " + socioBuscado.telefono.substring(3, 6) + " " + socioBuscado.telefono.substring(6)));

    var nacimiento = new Date(socioBuscado.fechaNacimiento);
    var textoFechaNacimiento = diasSemana[nacimiento.getDay()].toLowerCase() + ", " + nacimiento.getDate() + " de " + meses[nacimiento.getMonth()].toLowerCase() + " de " + nacimiento.getFullYear();
    agregarDatos(datos, "Fecha de nacimiento y edad", textoFechaNacimiento + " - " + calcularEdad(socioBuscado.fechaNacimiento) + " años");

    var fechaAlta = new Date(socioBuscado.fechaAlta);
    var diasEnClub = Math.floor((new Date() - fechaAlta) / (1000 * 60 * 60 * 24));
    var textoAlta = socioBuscado.fechaAlta.split("-").reverse().join("/");

    agregarDatos(datos, "Fecha de alta y días en el club", textoAlta + " y " + diasEnClub + " días en el club");

    var fechaActual = new Date();
    var cumple = new Date(fechaActual.getFullYear(), nacimiento.getMonth(), nacimiento.getDate());
    if(cumple < fechaActual){
      cumple.setFullYear(fechaActual.getFullYear() + 1);
    }
    agregarDatos(datos, "Días que faltan para su cumpleaños", Math.ceil((cumple - fechaActual) / (1000 * 60 * 60 * 24)));

    agregarDatos(datos, "Actividades y cuota mensual", socioBuscado.actividades + " " + socioBuscado.cuota + "€");
    resultadoFicha.appendChild(datos);
  }
}

/**
 * Método auxiliar que añade a una lista de datos un título con su valor
 */
function agregarDatos(dl, titulo, valor){
  var dt = document.createElement("dt");
  dt.textContent = titulo;
  var dd = document.createElement("dd");
  dd.textContent = valor;
  dl.appendChild(dt);
  dl.appendChild(dd);
}

/**
 * Método auxiliar que comprueba que el texto tiene letras (con tildes, ñ o ü) y un único espacio
 */
function soloLetras(texto){
  return /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+( [A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)*$/.test(texto);
}

/**
 * Método para validar el nombre de un socio
 */
function validaNombre(nombre){
  nombre = nombre.trim();
  var resultado = "";
  if(nombre === ""){
    resultado = "El nombre es obligatorio, no puede estar vacío";
  }
  else if(!soloLetras(nombre)){
    resultado = "El nombre solo puede tener letras y un espacio";
  }
  return resultado;
}

/**
 * Método para validar los apellidos. Devuelve cadena vacía si es correcto
 */
function validaApellidos(apellidos){
  apellidos = apellidos.trim();
  var resultado = "";
  if(apellidos === ""){
    resultado = "Los apellidos son obligatorios, no pueden estar vacío";
  }
  else if(!soloLetras(apellidos)){
    resultado = "Los apellidos solo pueden tener letras y un espacio";
  }
  return resultado;
}

/**
 * Método auxiliar para calcular la letra del DNI
 * @param numero 
 */
function letraDNI(numero){
  return "TRWAGMYFPDXBNJZSQVHLCKE".charAt(numero % 23);
}

/**
 * Método que valida el DNI, tanto el formato como la letra y que no haya otro socio con el mismo DNI
 */
function validaDNI(dni){
  var dniValidado = dni.trim().toUpperCase();
  var resultado = "";
  if(dniValidado === ""){
    resultado = "El DNI es obligatorio";
  }
  else if(!/^\d{8}[A-Z]$/.test(dniValidado)){
    resultado = "El DNI debe tener 8 números y una letra";
  }
  else if(dniValidado.charAt(8) !== letraDNI(parseInt(dniValidado.substring(0, 8), 10))){
    resultado = "La letra del DNI no es correcta";
  }
  else{
    for(var socio of socios){
      if(socio.dni === dniValidado){
        resultado = "Ya existe un socio con ese DNI.";
      }
    }
  }
  return resultado;
}

/**
 * Método que valida un email, con extensión de 2 letras o más
 */
function validaEmail(email){
  var emailValidado = email.trim();
  var resultado = ""
  if(emailValidado === ""){
    resultado = "El email es obligatorio";
  }
  else if(!/^[\w.+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/.test(emailValidado)){
    resultado = "El email debe tener el formato usuario@dominio.extensión (por ejemplo, ana@correo.es).";
  }
  return resultado;
}

/**
 * Método que valida el teléfono, es decir, que tenga 9 dígitos que empiecen por 6, 7 u 8 y se admiten espacios
 */
function validaTelefono(telf){
  var telefono = telf.replace(/\s/g, "");
  var resultado = "";
  if(telefono === ""){
    resultado = "El teléfono es obligatorio";
  }
  else if(!/^[6-9]\d{8}$/.test(telefono)){
    resultado = "El teléfono debe tener 9 dígitos y empezar por 6, 7, 8 o 9.";
  }
  return resultado;
}

/**
 * Método que valida la fecha de nacimiento, que exista y que no sea futura, además de que la edad mínima sean 14.
 */
function validaFechaNacimiento(fechNac){
  var fecha = fechNac.trim();
  var resultado = "";
  //Match devuelve la fecha completa, día, mes y año
  var partes = fecha.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if(fecha === ""){
    resultado = "La fecha de nacimiento es obligatoria";
  }
  else if(partes === null){
    resultado = "La fecha debe tener el formato dd/mm/aaaa";
  }
  else{
    var dia = parseInt(partes[1]);
    var mes = parseInt(partes[2]);
    var anio = parseInt(partes[3]);

    var nacimiento = new Date(anio, mes - 1, dia);
    if(nacimiento.getFullYear() !== anio || nacimiento.getMonth() !== mes - 1 || nacimiento.getDate() !== dia){
      resultado = "Esa fecha no existe en el calendario";
    }
    else if(nacimiento > new Date()){
      resultado = "La fecha de nacimiento no puede ser futura";
    }
    else if(calcularEdad(partes[3] + "-" + partes[2] + "-" + partes[1]) < 14){
      resultado = "Hay que tener al menos 14 años para ser socio";
    }
  }
  return resultado;
}

/**
 * Método que valida las actividades, debe haber al menos una marcada
 */
function validaActividades(lista){
  var resultado = "";
  if(lista.length === 0){
    resultado = "Debes marcar al menos una actividad";
  }
  return resultado;
}
/**
 * Variable que guarda las validaciones
 */
var validaciones = {
  nombre: validaNombre,
  apellidos: validaApellidos,
  dni: validaDNI,
  email: validaEmail,
  telefono: validaTelefono,
  fechaNacimiento: validaFechaNacimiento,
  actividades: validaActividades
};

/**
 * Método que valida todos los campo y devuelve un mensaje de error
 */
function validarAlta(datos){
  var errores = {};
  for(var codigo in validaciones){
    errores[codigo] = validaciones[codigo](datos[codigo]);
  }
  return errores;
}

/**
 * Método que indica si algún campo tiene error
 */
function hayErrores(errores){
  var resultado = false;
  for(var campo in errores){
    if(errores[campo] !== ""){
      resultado = true;
    }
  }
  return resultado;
}

/**
 * Método que da de alta un socio en base a los datos que se rellenen en el formulario
 */
function darAltaSocio(e){
  e.preventDefault();
  var aviso = document.getElementById("mensaje-alta");
  aviso.hidden = true;
  var datos = leerFormulario();
  var errores = validarAlta(datos);
  mostrarErrores(errores);

  if(!hayErrores(errores)){
    var socio = crearSocio(datos);
    socios.push(socio);
    var campos = document.querySelectorAll("#form-alta input");
    for(var campo of campos){
      if(campo.type === "checkbox"){
        campo.checked = false;
      }
      else{
        campo.value = "";
      }
    }
    aviso.textContent = "Socio " + socio.nombre + " dado de alta con id " + socio.id;
    aviso.hidden = false;
    rellenarFiltroActividad();
    actualizarSocios();
    rellenarEstadisticas();
  }
}

/**
 * Método que lee los input del formulario
 */
function leerFormulario(){
  var marcadas = [];
  var opciones = document.getElementsByName("actividades");
  for(var opcion of opciones){
    if(opcion.checked){
      marcadas.push(opcion.value);
    }
  }
  var datos = {
    nombre: document.getElementById("nombre").value,
    apellidos: document.getElementById("apellidos").value,
    dni: document.getElementById("dni").value,
    email: document.getElementById("email").value,
    telefono: document.getElementById("telefono").value,
    fechaNacimiento: document.getElementById("fecha-nacimiento").value,
    actividades: marcadas
  }
  return datos;
}

/**
 * Método que muestra los mensajes de error de cada campo
 */
function mostrarErrores(errores){
  var campos = {
    nombre: ["nombre", "error-nombre"],
    apellidos: ["apellidos", "error-apellidos"],
    dni: ["dni", "error-dni"],
    email: ["email", "error-email"],
    telefono: ["telefono", "error-telefono"],
    fechaNacimiento: ["fecha-nacimiento", "error-fecha-nacimiento"],
    actividades: ["grupo-actividades", "error-actividades"]
  };
  for(var clave in campos){
    var campo = document.getElementById(campos[clave][0]);
    document.getElementById(campos[clave][1]).textContent = errores[clave];
    if(errores[clave] === ""){
      campo.classList.remove("campo-error");
    }
    else{
      campo.classList.add("campo-error");
    }
  }
}

/**
 * Método que crea un nuevo socio a partir de los datos del formulario
 */
function crearSocio(datos){
  var hoy = new Date();
  var mes = hoy.getMonth() + 1;
  var dia = hoy.getDate();
  if(mes < 10){
    mes = "0" + mes;
  }
  if(dia < 10){
    dia = "0" + dia;
  }
  var fechaAlta = hoy.getFullYear() + "-" + mes + "-" + dia;
  var socio = {
    id: "SOC-" + String(socios.length + 1).padStart(4, "0"), 
    nombre: datos.nombre.trim(),
    apellidos: datos.apellidos.trim(),
    dni: datos.dni.trim().toUpperCase(),
    email: datos.email.trim().toLowerCase(),
    telefono: datos.telefono.replace(/\s/g, ""),
    fechaNacimiento: datos.fechaNacimiento.trim().split("/").reverse().join("-"),
    fechaAlta: fechaAlta,
    actividades: datos.actividades,
    cuota: datos.actividades.length * 15
  };
  return socio;
}
document.getElementById("telefono").addEventListener("input", formatearTelefono);
function formatearTelefono(e){
  var numeros = e.target.value.replace(/\s/g, "");
  var resultado = "";
  for(var i = 0; i < numeros.length; i++){
    if(i > 0 && i % 3 === 0){
       resultado += " ";
    }
    resultado += numeros.charAt(i);
  }
  e.target.value = resultado;
}
document.getElementById("form-alta").addEventListener("submit", darAltaSocio);

/**
 * Método para rellenar las estadísticas del club
 */
function rellenarEstadisticas(){
  var numSocios = document.getElementById("stat-total");
  numSocios.textContent = socios.length;

  var ingresosMensuales = document.getElementById("stat-ingresos");
  var ingresosTotales = 0;
  var sumaEdades = 0;
  var edadMin = calcularEdad(socios[0].fechaNacimiento);
  var edadMax = edadMin;
  var hayMenores = false;
  var tieneActividades = true;
  var dominios = [];
  for(var socio of socios){
    var edad = calcularEdad(socio.fechaNacimiento);
    ingresosTotales += socio.cuota;
    if(edad < 18){
      hayMenores = true;
    }
    if(socio.actividades === ""){
      tieneActividades = false;
    }
    sumaEdades += edad;
    edadMin = Math.min(edadMin, edad);
    edadMax = Math.max(edadMax, edad);

    var dominio = socio.email.split("@")[1];
    if(!dominios.includes(dominio)){
      dominios.push(dominio);
    }
  }
  ingresosMensuales.textContent = ingresosTotales + "€";
  var cuotaMedia = document.getElementById("stat-cuota-media");
  cuotaMedia.textContent = ingresosTotales / socios.length + "€";
  var edadMedia = document.getElementById("stat-edad-media");
  
  edadMedia.textContent = Math.round(sumaEdades / socios.length) + " años";
  var edadMinima = document.getElementById("stat-edad-min");
  edadMinima.textContent = edadMin;
  var edadMaxima = document.getElementById("stat-edad-max");
  edadMaxima.textContent = edadMax;

  var actividadPopular = "";
  var maxSocios = 0;
  for(var actividad of arrayClub){
    var cantidad = socios.filter(function(socio){
      return socio.actividades.includes(actividad);
    }).length;
    if(cantidad > maxSocios){
      maxSocios = cantidad;
      actividadPopular = actividad;
    }
  }
  var statActividadPopular = document.getElementById("stat-actividad");
  statActividadPopular.textContent = actividadPopular;
  var statSocioActividadPopular = document.getElementById("stat-actividad-socios");
  statSocioActividadPopular.textContent = maxSocios;

  var menores = document.getElementById("stat-menores");
  menores.textContent = hayMenores?"Si":"No";

  var statTieneActividad = document.getElementById("stat-todos-actividad");
  statTieneActividad.textContent = tieneActividades?"Si":"No";

  var veteranos = socios.slice();
  veteranos.sort(function(a, b){
    return a.fechaAlta.localeCompare(b.fechaAlta);
  })
  veteranos = veteranos.slice(0, 3);
  var listaVeteranos = document.getElementById("stat-veteranos");
  listaVeteranos.textContent = "";
  for(var veterano of veteranos){
    var li = document.createElement("li");
    li.textContent = veterano.nombre + " " + veterano.apellidos + " alta el " + veterano.fechaAlta;
    listaVeteranos.appendChild(li);
  }

  var dominiosCorreo = document.getElementById("stat-dominios");
  dominiosCorreo.textContent = "";
  for(var dom of dominios){
    var li = document.createElement("li");
    li.textContent = dom;
    dominiosCorreo.appendChild(li);
  }
  
}
rellenarFiltroActividad();
actualizarSocios();
rellenarEstadisticas();